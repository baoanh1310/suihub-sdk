/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { 
  getObjectId, 
  getObjectFields,
  MoveCallTransaction,
  getObjectType,
  TransactionBlock,
} from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule'
import { SDK } from '../sdk';
import { Pool,PoolInfo } from '../types';
import { checkPairValid } from '../utils/contracts'
import {d} from "../utils/number";
import Decimal from "decimal.js";

export type CreateAddLiquidTXPayloadParams = {
  coin_x: string;
  coin_y: string;
  coin_x_objectIds: string[],
  coin_y_objectIds: string[],
  coin_x_amount: string;
  coin_y_amount: string;
  gasPaymentObjectId?: string;
  slippage: number;
}

export type CreateRemoveLiquidTXPayloadParams = {
  coin_x: string;
  coin_y: string;
  lp_coin_objectIds: string[],
  gasPaymentObjectId: string;
}

export type CreateRemoveLiquidWithLpValueTXPayloadParams = {
  coin_x: string;
  coin_y: string;
  lp_coin_objectIds: string[],
  lp_val: string;
  gasPaymentObjectId: string;
}

export class PoolModule implements IModule {

   protected _sdk: SDK;
   
   get sdk() {
     return this._sdk;
   }
   
   constructor(sdk: SDK) {
     this._sdk = sdk;
   }

   removeLeadingZeros(address: string) {
      // remove leading 0s after 0x: 0x0345... => 0x345...
      let startIndex = 0;
      for (let i = 2; i < address.length; i++) {
          if (address[i] != '0') {
              startIndex = i;
              break;
          }
      }
      let simplifiedPackageObjectId = '0x';
      for (let i = startIndex; i < address.length; i++) {
          simplifiedPackageObjectId += address[i];
      }
      return simplifiedPackageObjectId;
  }

   // eslint-disable-next-line @typescript-eslint/no-empty-function
   async getPoolList():Promise<Pool[]>{  
      const { poolsDynamicId } = this.sdk.networkOptions;
      
      const poolsObjects = await (await this._sdk.jsonRpcProvider.getDynamicFields({ parentId: this.removeLeadingZeros(poolsDynamicId) })).data;
      const pools:Pool[] = [];
      poolsObjects.forEach(pool=> {
        pools.push({
          pool_addr: pool['objectId'],
          pool_type: pool['objectType'],
        })
      })
      return Promise.resolve(pools)
   }

   async getPoolInfo(coinXType:string, coinYType: string): Promise<PoolInfo> {
        const poolList:Pool[] = await this.getPoolList();
        if (!checkPairValid(coinXType,coinYType)) {
          Promise.reject('Invalid Pair');
        }
        if (!this.sdk.CoinList.getCoinInfoByType(coinXType) || !this.sdk.CoinList.getCoinInfoByType(coinYType)) {
          Promise.reject('Coin Not In Offical Coin List')
        }
        coinXType = this.removeLeadingZeros(coinXType);
        coinYType = this.removeLeadingZeros(coinYType);

        const pool:Pool | undefined = poolList.find(pool => {
            return pool.pool_type.includes(coinXType) && pool.pool_type.includes(coinYType);
        })

        if(!pool) {
          return Promise.reject();
        }
        
        const moveObject = await this._sdk.jsonRpcProvider.getObject(
          { 
            id: pool!.pool_addr, 
            options: {
              showContent: true,
              showDisplay: true,
              showType: true
            } 
          }
        );
        if (!moveObject.data) {
          return Promise.reject();
        }

        const id = getObjectId(moveObject);
        const fields = getObjectFields(moveObject)!['value']!['fields'];
        if (!fields) {
          return Promise.reject();
        }
        const lpSupply = fields?.['lp_supply'];
        const poolInfo: PoolInfo = {
            object_id: id,
            global: fields?.['global'],
            coin_x: Number(fields?.['coin_x']),
            coin_y: Number(fields?.['coin_y']),
            fee_coin_x: Number(fields?.['fee_coin_x']),
            fee_coin_y: Number(fields?.['fee_coin_y']),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
            lp_type: String(lpSupply?.type!),
            lp_supply: lpSupply?.fields['value']
        }
        return Promise.resolve(poolInfo);
   }

   getCoinOut(
    coinInVal: Decimal.Instance,
    reserveInSize: Decimal.Instance,
    reserveOutSize: Decimal.Instance
  ) {
    return coinInVal.mul(reserveInSize).div(reserveOutSize).toDP(0);
  }

  getCoinIn(
      coinOutVal: Decimal.Instance,
      reserveOutSize: Decimal.Instance,
      reserveInSize: Decimal.Instance
  ) {
    return coinOutVal.mul(reserveOutSize).div(reserveInSize).toDP(0);
  }

  async calculateRate(interactiveToken: string,coin_x:string,coin_y:string,coin_in_value:number) {
    const fromCoinInfo = this.sdk.CoinList.getCoinInfoByType(coin_x);
    const toCoinInfo = this.sdk.CoinList.getCoinInfoByType(coin_y);
    if (!fromCoinInfo) {
      throw new Error('From Coin not exists');
    } 
    if (!toCoinInfo) {
      throw new Error('To Coin not exits');
    }
    const pool = await this.sdk.Pool.getPoolInfo(coin_x, coin_y);
    const coin_x_reserve = pool.coin_x;
    const coin_y_reserve = pool.coin_y;

    // const [reserveX, reserveY] = interactiveToken === 'from' ? [coin_x_reserve,coin_y_reserce] : [coin_y_reserce,coin_x_reserve];
    const coin_x_name = coin_x.split("::").pop()!;
    const coin_y_name = coin_y.split("::").pop()!;
    const [reserveX, reserveY] = coin_x_name.localeCompare(coin_y_name) === -1 ? [coin_x_reserve, coin_y_reserve] : [coin_y_reserve, coin_x_reserve];


    const coin_x_in = d(coin_in_value);

    const amoutOut = 
       interactiveToken === 'from' ? this.getCoinOut(d(coin_x_in),d(reserveX),d(reserveY)) 
       : this.getCoinIn(coin_x_in,d(reserveX),d(reserveY));
    
    return amoutOut;
  } 

  buildAddLiquidTransAction(params: CreateAddLiquidTXPayloadParams) {
    const {  packageObjectId,globalId } = this.sdk.networkOptions;

    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageObjectId}::interface::multi_add_liquidity`,
      arguments: [
        tx.pure(globalId),
        tx.pure(params.coin_x_objectIds),
        tx.pure(params.coin_x_amount),
        tx.pure((parseInt(params.coin_x_amount) * params.slippage).toString()),
        tx.pure(params.coin_y_objectIds),
        tx.pure(params.coin_y_amount),
        tx.pure((parseInt(params.coin_y_amount) * params.slippage).toString())
      ],
      typeArguments: [params.coin_x, params.coin_y],
    })

    return tx;
  } 
  
  buildRemoveLiquidTransAction(params: CreateRemoveLiquidTXPayloadParams){
    const { packageObjectId,globalId } = this.sdk.networkOptions;

    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageObjectId}::interface::multi_remove_liquidity`,
      arguments: [
        tx.pure(globalId),
        tx.pure(params.lp_coin_objectIds)
      ],
      typeArguments: [params.coin_x, params.coin_y]
    })

    return tx;
  } 

  buildRemoveLiquidWithLpValTransAction(params: CreateRemoveLiquidWithLpValueTXPayloadParams){
    const { packageObjectId,globalId } = this.sdk.networkOptions;

    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageObjectId}::interface::multi_remove_liquidity`,
      arguments: [
        tx.pure(globalId),
        tx.pure(params.lp_coin_objectIds),
        tx.pure(params.lp_val)
      ],
      typeArguments: [params.coin_x, params.coin_y]
    })
    return tx;
  } 
}

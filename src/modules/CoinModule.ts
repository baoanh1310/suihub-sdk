/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getObjectId, Coin, MoveCallTransaction, TransactionBlock } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule'
import { SDK } from '../sdk';

export const SUI_COIN_TYPE = "0x2::sui::SUI";

export interface CoinInfo {
    id: string,
    balance: bigint,
    coinSymbol: string,
}

export interface CoinObjects {
    balance: bigint,
    objects: CoinInfo[]
} 

export type CreateAdminMintPayloadParams = {
    coinTypeArg: string;
    coinCapLock:string,
    walletAddress:string,
    amount: number,
    gasBudget?: number,
}

export class CoinModule implements IModule {
    protected _sdk: SDK;
    
    get sdk() {
      return this._sdk;
    }
    
    constructor(sdk: SDK) {
      this._sdk = sdk;
    }

    async getObjectsList(address: string) {
        const objects = await this._sdk.jsonRpcProvider.getOwnedObjects({ owner: address });
        console.log("Owned objects: ", objects);
        return objects;
    }

    // coinTypeArg: "0x2::sui::SUI"
    async getCoinBalance(address:string,coinTypeArg:string) {
        console.log("Coin type: ", coinTypeArg);
        const coinMoveObjects = await (await this._sdk.jsonRpcProvider.getAllCoins({owner: address})).data;
        const balanceObjects: CoinInfo[] = [];
        coinMoveObjects.forEach(object => {
            if (!object.coinType) {
                return;
            }
            const coinTypeArgWithoutLeadZeros = this.removeLeadingZeros(coinTypeArg);
            if (coinTypeArgWithoutLeadZeros != object.coinType) {
                return;
            }
            const coinObjectId = object.coinObjectId;
            const balance = BigInt(object.balance);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const coinSymbol = Coin.getCoinSymbol(coinTypeArgWithoutLeadZeros!);
            
            balanceObjects.push({
                id: coinObjectId,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                balance: balance!,
                coinSymbol: coinSymbol
            })
        })
        const balanceSum:number = balanceObjects.reduce((pre,cur)=> {
           return  Number(cur.balance) + pre
        },0)
        return {
            balance: balanceSum,
            objects: balanceObjects
        }
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

    async getLpBalance(
        address:string,
        coin_x: string, 
        coin_y: string
    ) {
        const coin_x_name = coin_x.split("::").pop()!;
        const coin_y_name = coin_y.split("::").pop()!;
        let left_coin = coin_x_name.localeCompare(coin_y_name) === -1 ? coin_x : coin_y;
        left_coin = this.removeLeadingZeros(left_coin);
        let right_coin = coin_x_name.localeCompare(coin_y_name) === 1 ? coin_x : coin_y;
        right_coin = this.removeLeadingZeros(right_coin);
        const { packageObjectId } = this.sdk.networkOptions;

        const simplifiedPackageObjectId = this.removeLeadingZeros(packageObjectId);

        const lpType = `${simplifiedPackageObjectId}::implements::LP<${left_coin}, ${right_coin}>`;
        const lpBalance = await this.getCoinBalance(address, lpType);
        return lpBalance;
    }

    getMinCoinsRequired(
        coins: CoinInfo[],
        balance: number
    ) {
        const sortFn = (a: CoinInfo, b: CoinInfo) => Number(a.balance - b.balance);
        coins.sort(sortFn);
        const result: string[] = [];
        let currentTotalBalance = 0;
        for (const coin of coins) {
            result.push(coin.id);
            currentTotalBalance += Number(coin.balance);
            if (currentTotalBalance > balance) {
                break;
            }
        }
        if (currentTotalBalance < balance) {
            return [];
        }
        return result;
    }

    buildFaucetTokenTransaction(coinTypeArg: string) {
        const faucetPackageId = this.sdk.networkOptions.faucetPackageId;
        const faucetObjectId = this.sdk.networkOptions.faucetObjectId;
        
        const tx = new TransactionBlock();
        const txn:MoveCallTransaction = {
            target: `${faucetPackageId}::faucet::claim`,
            kind: "MoveCall",
            arguments: [
                tx.pure(faucetObjectId),
            ],
            typeArguments: [coinTypeArg],
        }
        return txn;
    }
    
    // only admin
    /*
    async buildAdminMintTestTokensTransaction(createAdminMintPayloadParams: CreateAdminMintPayloadParams) {
        const faucetPackageId = this.sdk.networkOptions.faucetPackageId;
        const txn:MoveCallTransaction = {
            packageObjectId: faucetPackageId,
            module: 'lock',
            function: 'mint_and_transfer',
            arguments: [
                createAdminMintPayloadParams.coinCapLock,
                createAdminMintPayloadParams.amount,
                createAdminMintPayloadParams.walletAddress],
            typeArguments: [createAdminMintPayloadParams.coinTypeArg],
            gasBudget: createAdminMintPayloadParams.gasBudget ? createAdminMintPayloadParams.gasBudget : 10000,
        }
        return txn;
    }
    
    async buildSpiltTransaction(signerAddress: string, splitTxn:SplitCoinTransaction) {
        const serializer = await this._sdk.serializer.newSplitCoin(
            signerAddress,
            splitTxn
        );
        return serializer.getData();
    }

    async buildMergeTransaction(signerAddress: string, mergeTxn:MergeCoinTransaction) {
        const serializer = await this._sdk.serializer.newMergeCoin(
            signerAddress,
            mergeTxn
        );
        return serializer.getData();
    }
    */
 }
 
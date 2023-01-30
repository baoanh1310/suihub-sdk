/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readConfig } from './readConfig';
import { Command } from 'commander';
import { getCreatedObjects, getTransactionEffects } from '@mysten/sui.js';
import { CreateAddLiquidTXPayloadParams,CreateRemoveLiquidTXPayloadParams } from '../modules';
import { addHexPrefix } from '../utils/hex';
import { randomInt } from 'crypto';

import { 
    TESTNET_BNB_COIN_TYPE,
    TESTNET_USDT_COIN_TYPE,
    TESTNET_XBTC_COIN_TYPE,
    TESTNET_WBTC_COIN_TYPE,
    TESTNET_BTC_COIN_TYPE,
    TESTNET_ETH_COIN_TYPE,
    TESTNET_DAI_COIN_TYPE,
    TESTNET_USDC_COIN_TYPE,
  } from "../constants";

const MINT_TOKEN_MAPS:Map<string,string> = new Map([
    [TESTNET_USDT_COIN_TYPE, '0xa0f8edf55c14100fef1b4af0c95a18bb804f6d41'],
    [TESTNET_XBTC_COIN_TYPE, '0xf1686ecfdf97c0c9189b6e655481990e797b0c07'],
    [TESTNET_BTC_COIN_TYPE, '0x1c89c2ebf0478c8e7bca2df23eb82b4a68dc5eab'],
    [TESTNET_ETH_COIN_TYPE, '0xf4ff1caff2049d0eb592fab2c0931f41cd1f2832'],
    [TESTNET_BNB_COIN_TYPE, '0x6ff50f5020538e15d2f6f6431822a0195f21f23a'],
    [TESTNET_WBTC_COIN_TYPE, '0x3e087933a3208188877823b8668b360395b3516f'],
    [TESTNET_DAI_COIN_TYPE, '0x6349d86e1a23e7b3e45c9b916361fe9bc5e41c22'],
    [TESTNET_USDC_COIN_TYPE, '0x8bf4d01104a44bce03ebb1445b75c63f6b3803cd'],
]);

export const listPoolCmd = async (
    program:Command
) => {
    const listPools = async() => {
        const { suiAmmSdk } = readConfig(program);
        const poolList = await suiAmmSdk.Pool.getPoolList();
        console.log(poolList);
    }
    program.command('suihub:list_pools')
        .description('list all pools')
        .action(listPools)
}

export const addLiquidCmd = async (
    program: Command
) => {
    const addLiquid = async (
        coin_x_type:string,
        coin_y_type:string,
        coin_x_object_ids:string,
        coin_x_amount: string,
        coin_y_object_ids:string,
        coin_y_amount: string,
        slippage:string,
        gasPayment:string,
    ) => {
        const { suiAmmSdk, rawSigner } = readConfig(program);
        const coin_x_object_ids_list = coin_x_object_ids.split(',')
        const coin_y_object_ids_list = coin_y_object_ids.split(',')
        const addLiquidParams:CreateAddLiquidTXPayloadParams = {
            coin_x: coin_x_type,
            coin_y: coin_y_type,
            coin_x_objectIds:coin_x_object_ids_list,
            coin_y_objectIds: coin_y_object_ids_list,
            coin_x_amount: Number(coin_x_amount),
            coin_y_amount: Number(coin_y_amount),
            slippage: Number(slippage),
            gasPaymentObjectId:gasPayment
        }
        console.log(`Add Liquid params: ${JSON.stringify(addLiquidParams)}`)
        const addLiquidTxn = await suiAmmSdk.Pool.buildAddLiquidTransAction(addLiquidParams);
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(addLiquidTxn,"WaitForEffectsCert");
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    };
    program.command('suihub:addLiquid')
        .description('add liquid')
        .argument('<coin_x_type>')
        .argument('<coin_y_type>')
        .argument('<coin_x_object_ids>')
        .argument('<coin_x_amount>')
        .argument('<coin_y_object_ids>')
        .argument('<coin_y_amount>')
        .argument('<slippage>')
        .argument('gaspayment')
        .action(addLiquid)
}

export const removeLiquidCmd = async (
    program: Command

) => {
    const removeLiquid = async (
        coin_x_type:string,
        coin_y_type:string,
        lp_coin_object_ids:string,
    
        gasPayment:string,
    ) => {
        const { suiAmmSdk, rawSigner } = readConfig(program);
        const lp_coin_object_ids_list = lp_coin_object_ids.split(",");
    
        const removeLiquidParams:CreateRemoveLiquidTXPayloadParams = {
            coin_x: coin_x_type,
            coin_y: coin_y_type,
            lp_coin_objectIds: lp_coin_object_ids_list,
            gasPaymentObjectId:gasPayment
        }
        console.log(`remove Liquid params: ${JSON.stringify(removeLiquidParams)}`)
        const removeLiquidTxn = await suiAmmSdk.Pool.buildRemoveLiquidTransAction(removeLiquidParams);
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(removeLiquidTxn,"WaitForEffectsCert");
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    };
    program.command('suihub:removeLiquid')
        .description('add liquid')
        .argument('<coin_x_type>')
        .argument('<coin_y_type>')
        .argument('<lp_coin_object_ids>')
        .argument('gaspayment')
        .action(removeLiquid)
}

export const adminMintTestTokenCmd= async(
    program: Command
) => {
    const DEFAULT_MINT_AMOUNT = 10000000000000;
    const DEFAULT_GAS_BUDGET = 10000;
    const adminAddLiquidCmd = async (
    ) => {
        for(const token of MINT_TOKEN_MAPS) {
            const coinTypeArg = token[0];
            const coinCapLock = token[1];
            const { suiAmmSdk, rawSigner } = readConfig(program);
            const address = addHexPrefix(await rawSigner.getAddress());
            const mintTxn = await suiAmmSdk.Coin.buildAdminMintTestTokensTransaction({
                coinTypeArg: coinTypeArg,
                coinCapLock: coinCapLock,
                walletAddress: address,
                amount: DEFAULT_MINT_AMOUNT,
                gasBudget: DEFAULT_GAS_BUDGET + randomInt(1000)
            });
            const executeResponse = await rawSigner.executeMoveCallWithRequestType(mintTxn,"WaitForEffectsCert");
            const response = getTransactionEffects(executeResponse);
            const createTokenObjectId =  getCreatedObjects(executeResponse)?.[0].reference.objectId;
            console.log(`mint token: ${coinTypeArg} objectId: ${createTokenObjectId}`);
            console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `);
        }
        // 3. get sui payment object
    }
    program.command('suihub:adminMintTestToken')
        .description('admin mint test token')
        .action(adminAddLiquidCmd);
}

export const adminAddAllLiquidCmd = async (
    program: Command
) => {
    const excuteAddliquid = async (coin_x_type:string,coin_y_type:string,coin_x_object_ids_list:string[],coin_y_object_ids_list:string[])=> {
        const { suiAmmSdk, rawSigner } = readConfig(program);

        const addLiquidParams:CreateAddLiquidTXPayloadParams = {
            coin_x: coin_x_type!,
            coin_y: coin_y_type!,
            coin_x_objectIds:coin_x_object_ids_list,
            coin_y_objectIds: coin_y_object_ids_list,
            coin_x_amount: 10000000000000,
            coin_y_amount: 10000000000000,
            slippage: 0.2
        }
        console.log(`Add Liquid params: ${JSON.stringify(addLiquidParams)}`)
        const addLiquidTxn = await suiAmmSdk.Pool.buildAddLiquidTransAction(addLiquidParams);
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(addLiquidTxn,"WaitForEffectsCert");
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    }
    const addAllLiquid = async (
    ) => {
        const { suiAmmSdk, rawSigner } = readConfig(program);
        // GET USDT tokenList 
        // 1. BNB TOKEN
        const tokenTypeArgList = Array.from(MINT_TOKEN_MAPS.keys());
        const bnbTokenArg = tokenTypeArgList.find(token=> token.includes('BNB'));
        const address = addHexPrefix(await rawSigner.getAddress());
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const bnbObject = suiAmmSdk.Coin.getCoinBalance(address,bnbTokenArg!);
        console.log(`token: ${bnbTokenArg} balance: ${(await bnbObject).balance}`)

        const ethTokenArg = tokenTypeArgList.find(token=> token.includes('ETH'));
        const ethObject = suiAmmSdk.Coin.getCoinBalance(address,ethTokenArg!);
        console.log(`token: ${ethTokenArg} balance: ${(await ethObject).balance}`)

        const btcTokenArg = tokenTypeArgList.find(token=> token.includes('BTC'));
        const btcObject = suiAmmSdk.Coin.getCoinBalance(address,btcTokenArg!);
        console.log(`token: ${btcTokenArg} balance: ${(await btcObject).balance}`)

        // 2. USDT TOKEN
        const usdtTokenArg = tokenTypeArgList.find(token=> token.includes('USDT'));
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const usdtObject = suiAmmSdk.Coin.getCoinBalance(address,usdtTokenArg!);
        console.log(`token: ${usdtTokenArg} balance: ${(await usdtObject).balance}`)

        const bnbList = [(await bnbObject).objects[0].id];
        const ethList =  [(await ethObject).objects[0].id];
        const btcList =  [(await btcObject).objects[0].id];
        
        // 3. add BNB-USDT liquid
        await excuteAddliquid(bnbTokenArg!,usdtTokenArg!,bnbList,[(await usdtObject).objects[0].id]);    
        await excuteAddliquid(ethTokenArg!,usdtTokenArg!,ethList,[(await usdtObject).objects[1].id]);    
        await excuteAddliquid(btcTokenArg!,usdtTokenArg!,btcList,[(await usdtObject).objects[2].id]);    

    };
    program.command('suihub:adminAddAllLiquid')
        .description('admin add liquid')
        .action(addAllLiquid)
}
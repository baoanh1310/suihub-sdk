import {SDK,CONFIGS} from './main'
//import {d, decimalsMultiplier} from "./utils/number";
import { 
    TESTNET_USDT_COIN_TYPE, 
    TESTNET_BNB_COIN_TYPE,
    TESTNET_DAI_COIN_TYPE,
    TESTNET_USDC_COIN_TYPE,
    TESTNET_ETH_COIN_TYPE,
} from './constants'

const ADDRESS = '0x0631d94f22ff532ba169402aa567092c9e57d6117aef2750bb56c0f4356c848b';

describe('Pool Module',()=>{
    const sdk = new SDK(CONFIGS.testnet);
    test('get pool',async()=>{
        const poolList = await sdk.Pool.getPoolList();
        console.log(poolList);
        const poolDetail = await sdk.Pool.getPoolInfo(TESTNET_BNB_COIN_TYPE,TESTNET_USDT_COIN_TYPE);
        console.log(poolDetail);
        expect(1).toBe(1)
    })
})

describe('Token Module',()=>{
    const sdk = new SDK(CONFIGS.testnet);
    const address = ADDRESS;
    test('get token balance',async()=>{
        const bnb = await sdk.Coin.getCoinBalance(address,TESTNET_BNB_COIN_TYPE);
        console.log(`bnb balance: ${bnb.balance}`)
        console.log(bnb.objects);
        console.log('----------------------------------------------------');
        const usdt = await sdk.Coin.getCoinBalance(address,TESTNET_USDT_COIN_TYPE);
        console.log(`usdt balance: ${usdt.balance}`)
        console.log(usdt.objects);
        expect(1).toBe(1)
    })
})

/*
describe('Swap Module',()=>{
    const sdk = new SDK(CONFIGS.testnet);

    test('calculate rate',async()=>{
        const fromRate = await sdk.Swap.calculateRate('from',TESTNET_BNB_COIN_TYPE,TESTNET_USDT_COIN_TYPE,1);
        console.log(`from rate: ${fromRate}`);
        console.log('----------------------------------------------------');
        const toRate = await sdk.Swap.calculateRate('to',TESTNET_BNB_COIN_TYPE,TESTNET_USDT_COIN_TYPE,Math.pow(10,6));
        console.log(`to rate: ${toRate}`);
        expect(1).toBe(1)
    })
})

describe('Pool Module Testnet',()=>{
    const sdk = new SDK(CONFIGS.testnet);
    test('get pool',async()=>{
        const poolList = await sdk.Pool.getPoolList();
        console.log("Number pool: ", poolList.length);
        const poolDetail = await sdk.Pool.getPoolInfo(TESTNET_BNB_COIN_TYPE,TESTNET_USDT_COIN_TYPE);
        console.log(poolDetail);
        expect(1).toBe(1)
    })
})

describe('Token Module Testnet',()=>{
    const sdk = new SDK(CONFIGS.testnet);
    const address = ADDRESS;
    test('get token balance',async()=>{
        const token = await sdk.Coin.getCoinBalance(address,TESTNET_BNB_COIN_TYPE);
        console.log(`token balance: ${token.balance}`)
        console.log(token.objects);
        console.log('----------------------------------------------------');
        const usdt = await sdk.Coin.getCoinBalance(address,TESTNET_USDT_COIN_TYPE);
        console.log(`usdt balance: ${usdt.balance}`)
        console.log(usdt.objects);
        expect(1).toBe(1)
    })
})

describe('Swap Module Testnet',()=>{
    const sdk = new SDK(CONFIGS.testnet);

    test('calculate rate',async()=>{
        const fromRate = await sdk.Swap.calculateRate('from',TESTNET_BNB_COIN_TYPE,TESTNET_USDT_COIN_TYPE,1);
        console.log(`from rate: ${fromRate}`);
        console.log('----------------------------------------------------');
        const toRate = await sdk.Swap.calculateRate('to',TESTNET_BNB_COIN_TYPE,TESTNET_USDT_COIN_TYPE,Math.pow(10,6));
        console.log(`to rate: ${toRate}`);
        expect(1).toBe(1)
    })
})

describe('LP balance Testnet', () => {
    const sdk = new SDK(CONFIGS.testnet);
    const address = ADDRESS;
    test('get lp balance', async () => {
        const lp = await sdk.Coin.getLpBalance(address, TESTNET_USDT_COIN_TYPE, TESTNET_ETH_COIN_TYPE);
        console.log(`lp balance: ${lp.balance}`)
        console.log(lp.objects);
    })
});
*/
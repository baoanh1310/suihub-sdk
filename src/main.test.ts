import {SDK,CONFIGS} from './main'
//import {d, decimalsMultiplier} from "./utils/number";
import { 
    TESTNET_USDT_COIN_TYPE, 
    TESTNET_BNB_COIN_TYPE, 
    DEVNET_USDT_COIN_TYPE, 
    DEVNET_BNB_COIN_TYPE,
    DEVNET_DAI_COIN_TYPE,
    DEVNET_USDC_COIN_TYPE,
    DEVNET_ETH_COIN_TYPE,
} from './constants'
/*
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
    const address = '0x37a1a8b0850cdf198a080055493fa9389b71f39b';
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
*/
describe('Pool Module Devnet',()=>{
    const sdk = new SDK(CONFIGS.devnet);
    test('get pool',async()=>{
        const poolList = await sdk.Pool.getPoolList();
        console.log("Number pool: ", poolList.length);
        const poolDetail = await sdk.Pool.getPoolInfo(DEVNET_BNB_COIN_TYPE,DEVNET_USDT_COIN_TYPE);
        console.log(poolDetail);
        expect(1).toBe(1)
    })
})

describe('Token Module Devnet',()=>{
    const sdk = new SDK(CONFIGS.devnet);
    const address = '0x37a1a8b0850cdf198a080055493fa9389b71f39b';
    test('get token balance',async()=>{
        const token = await sdk.Coin.getCoinBalance(address,DEVNET_BNB_COIN_TYPE);
        console.log(`token balance: ${token.balance}`)
        console.log(token.objects);
        console.log('----------------------------------------------------');
        const usdt = await sdk.Coin.getCoinBalance(address,DEVNET_USDT_COIN_TYPE);
        console.log(`usdt balance: ${usdt.balance}`)
        console.log(usdt.objects);
        expect(1).toBe(1)
    })
})

describe('Swap Module Devnet',()=>{
    const sdk = new SDK(CONFIGS.devnet);

    test('calculate rate',async()=>{
        const fromRate = await sdk.Swap.calculateRate('from',DEVNET_BNB_COIN_TYPE,DEVNET_USDT_COIN_TYPE,1);
        console.log(`from rate: ${fromRate}`);
        console.log('----------------------------------------------------');
        const toRate = await sdk.Swap.calculateRate('to',DEVNET_BNB_COIN_TYPE,DEVNET_USDT_COIN_TYPE,Math.pow(10,6));
        console.log(`to rate: ${toRate}`);
        expect(1).toBe(1)
    })
})

describe('LP balance Devnet', () => {
    const sdk = new SDK(CONFIGS.devnet);
    const address = '0x37a1a8b0850cdf198a080055493fa9389b71f39b';
    test('get lp balance', async () => {
        const lp = await sdk.Coin.getLpBalance(address, DEVNET_USDT_COIN_TYPE, DEVNET_ETH_COIN_TYPE);
        console.log(`lp balance: ${lp.balance}`)
        console.log(lp.objects);
    })
});
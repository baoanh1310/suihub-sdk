## suihub-Sui-SDK
The typescript SDK for [Suihub](https://github.com/baoanh1310/suihub-sdk)

## Docs
[Suihub SDK docs](https://github.com/baoanh1310/suihub-sdk)

## Usage

### Install
```bash
yarn add suihub-sdk
```

### Test
```bash
yarn test
```

### Init SDK

```ts
import { SDK,TESTNET_CONFIG } from 'suihub-sdk';
(async function main() {
    const sdk = new SDK(TESTNET_CONFIG);
})();
```
### Query LiquidPool

```ts
import { SDK,TESTNET_CONFIG } from 'suihub-sdk';
const SUI_COIN_TYPE = "0x2::sui::SUI";
const USDT_COIN_TYPE = "0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f::coins::USDT";
(async function main() {
    const sdk = new SDK(TESTNET_CONFIG);
    // get all pool list
    const poolDetail = await sdk.Pool.getPoolList();
    // get pool info from coinx and coiny
    const poolDetail = await sdk.Pool.getPoolInfo(SUI_COIN_TYPE,USDT_COIN_TYPE);
    console.log(poolDetail);
})();
```

### CoinList

```ts
...
//get coin list:
const tokenList =  sdk.CoinList.getCoinInfoList();
console.log(tokenList);
```
```ts
//get coin info:
const tokenInfo = sdk.CoinList.getCoinInfoBySymbol('SUI');
console.log(tokenInfo);
```

### Coin
```ts
const SUI_COIN_TYPE = "0x2::sui::SUI";
const USDT_COIN_TYPE = "0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f::coins::USDT";
const address = '0x37a1a8b0850cdf198a080055493fa9389b71f39b';
...
const token = await sdk.Coin.getTokenBalance(address,SUI_COIN_TYPE);
```

## CLI
yarn cli
```
                                                                                      
Usage: index [options] [command]

Options:
  -c, --config <path>                                                                                                                             path to your sui config.yml (generated with "sui client active-address")
  -h, --help                                                                                                                                      display help for command

Commands:
  suihub:faucet <coin_type>                                                                                                                     faucet token
  suihub:wallet                                                                                                                                 print wallet 
  suihub:addLiquid <coin_x_type> <coin_y_type> <coin_x_object_ids> <coin_x_amount> <coin_y_object_ids> <coin_y_amount> <slippage> <gaspayment>  add liquid
  suihub:removeLiquid <coin_x_type> <coin_y_type> <lp_coin_object_ids> <gaspayment>                                                             add liquid
  suihub:list_pools                                                                                                                             list all pools
  help [command]                                                                                                                                  display help for command
```

### Add Liquid

* BTC-ETH Pool
```
yarn cli -c ~/.sui/sui_config suihub:addLiquid 0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f::coins::BTC 0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f::coins::ETH 0x96bf551cd27081c5d519f120592f180d8103d79f 100000000000 0xd7167f5fba00e2e8814651a9f41dc08fd92db43c 100000000000 0.2 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```
* XBTC-USDT Pool
```
yarn cli -c ~/.sui/sui_config suihub:addLiquid 0x985c26f5edba256380648d4ad84b202094a4ade3::usdt::USDT 0x985c26f5edba256380648d4ad84b202094a4ade3::xbtc::XBTC 0xc9e9cd5042b0df537426abc1e2f4b20babd07186 999999998000 0x74d246f80c53ab48d0b7b23387d8e1dc64536265 9999998000 0.2 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```
* BTC-XBTC
```
yarn cli -c ~/.sui/sui_config suihub:addLiquid 0xed67ff7ca06c2af6353fcecc69e312a0588dbab1::btc::BTC 0x985c26f5edba256380648d4ad84b202094a4ade3::xbtc::XBTC 0x96bf551cd27081c5d519f120592f180d8103d79f 100000000000 0xd7167f5fba00e2e8814651a9f41dc08fd92db43c 100000000000 0.2 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```

* BTC-USDT Pool
```
yarn cli -c ~/.sui/sui_config suihub:addLiquid 0xed67ff7ca06c2af6353fcecc69e312a0588dbab1::btc::BTC 0x985c26f5edba256380648d4ad84b202094a4ade3::usdt::USDT 0x73ea04683c9fb1a7621d4bd48fd9542d6b9d45dc 10000000000000 0x21170033ca498d40ae12caa331e045e40a20c99f 10000000000000 0.2 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```
* ETH-USDT Pool
```
yarn cli -c ~/.sui/sui_config suihub:addLiquid 0xed67ff7ca06c2af6353fcecc69e312a0588dbab1::eth::ETH 0x985c26f5edba256380648d4ad84b202094a4ade3::usdt::USDT 0x69cce60989e7c9e413031481d10bdbc165f854d0 10000000000000 0x262439fc8cd278eaf74c8fe464f54ea6b73d1c58 10000000000000 0.2 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```
* BNB-USDT Pool
```
yarn cli -c ~/.sui/sui_config suihub:addLiquid 0xed67ff7ca06c2af6353fcecc69e312a0588dbab1::bnb::BNB 0x985c26f5edba256380648d4ad84b202094a4ade3::usdt::USDT 0x572ddd6021e94c1cb938a58a549667853ff3d222 10000000000000 0x572ddd6021e94c1cb938a58a549667853ff3d222 10000000000000 0.2 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```

### Remove Liquid
```
yarn cli -c ~/.sui/sui_config suihub:removeLiquid 0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f::coins::USDT 0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f::coins::XBTC 0x2909381a88fbac804a6361d96941ed52234a40ab 0xf3a028216f202bba58f2520a3ed6aca6c5d4275e
```
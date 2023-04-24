//import {  Network  } from '@mysten/sui.js';

export class NetworkConfiguration {
  constructor(
    public name: string,
    public fullNodeUrl: string,
    public packageObjectId: string,
    public globalId: string,
    public poolsDynamicId: string,
    public faucetPackageId:string,
    public faucetObjectId:string,
    public chainId = 1,
  ) {}
}

export const MAINNET_CONFIG = new NetworkConfiguration(
  'mainnet',
  'https://fullnode.mainnet.sui.io:443',
  '0x1f0d4d3ca884a1a6958fe5ba9dc6d8003d9f7d76',
  '0x92131c160fa0f1b95190a3a7cbfa32d0149ab00f',
  '0x19465f7b8008aa1443269808840856a3c8b2c119',
  "",
  "",
  2,
);

export const TESTNET_RPC_URL = 'https://fullnode.testnet.sui.io:443';
export const TESTNET_SWAP_PACKAGE_OBJECT_ID = '0xc70efb5d9cca1c88f99a408678c61e785d63bbf177b5d2ce099cef6b3970862b';
export const TESTNET_SWAP_GLOBAL_OBJECT_ID = '0xbfa13d2adacb9209e57c15497d18e4cc31bf3e9a2b50604caab391e7227e625b';
export const TESTNET_TESTCOIN_PACKAGE_OBJECT_ID = '0x4766f7f30d26576f7680734e457d4d91bc729e27366de1c2a3c8062bd7187bcc';
export const TESTNET_TESTCOIN_GLOBAL_OBJECT_ID = '0x824eabb8cc209d9ef9535d76636a17aab3fa1b10bc5885f8ff936cc84065a369';
export const TESTNET_POOLS_DYNAMIC_ID = '0x1328a8dc124336e9d0e4bb69a13e551030c6405be468ffe72bbdc2fadf8b75a4';

export const TESTNET_CONFIG = new NetworkConfiguration(
  'testnet',
  TESTNET_RPC_URL,
  TESTNET_SWAP_PACKAGE_OBJECT_ID,
  TESTNET_SWAP_GLOBAL_OBJECT_ID,
  TESTNET_POOLS_DYNAMIC_ID,
  TESTNET_TESTCOIN_PACKAGE_OBJECT_ID,
  TESTNET_TESTCOIN_GLOBAL_OBJECT_ID,
  1,
);
export const DEVNET_RPC_URL = 'https://fullnode.devnet.sui.io:443';
export const DEVNET_SWAP_PACKAGE_OBJECT_ID = '0x6031887742faa1ae45da62d6bf63a528dcfa8185';
export const DEVNET_SWAP_GLOBAL_OBJECT_ID = '0x132241a487edb3d43524fd3e44c00c82e7e128eb';
export const DEVNET_TESTCOIN_PACKAGE_OBJECT_ID = '0xc3b61007f1d8adc89294e0aa43e6940db92fab42';
export const DEVNET_TESTCOIN_GLOBAL_OBJECT_ID = '0x5b99f1aa503b90d9d12d3287b81340ff5557c41d';
export const DEVNET_POOLS_DYNAMIC_ID = '0xc82eb38e18d2b195d003d5ec7a5597c8edcff993';

export const DEVNET_CONFIGS = new NetworkConfiguration(
  'devnet',
  DEVNET_RPC_URL,
  DEVNET_SWAP_PACKAGE_OBJECT_ID,
  DEVNET_SWAP_GLOBAL_OBJECT_ID,
  DEVNET_POOLS_DYNAMIC_ID,
  DEVNET_TESTCOIN_PACKAGE_OBJECT_ID,
  DEVNET_TESTCOIN_GLOBAL_OBJECT_ID,
  0,
);

export const CONFIGS = {
  mainnet: MAINNET_CONFIG,
  testnet: TESTNET_CONFIG,
  devnet: DEVNET_CONFIGS,
};
  
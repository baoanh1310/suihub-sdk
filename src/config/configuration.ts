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
    public chainId = 0,
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
export const TESTNET_SWAP_PACKAGE_OBJECT_ID = '0x0235d33eb15185af711494de9ab03f9e8da4333a';
export const TESTNET_SWAP_GLOBAL_OBJECT_ID = '0x090124d79389067b98a3249fcd27164c0e8a8fa3';
export const TESTNET_TESTCOIN_PACKAGE_OBJECT_ID = '0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f';
export const TESTNET_TESTCOIN_GLOBAL_OBJECT_ID = '0xbe372bd76e86780f78d94ee127c0330cadfb273c';
export const TESTNET_POOLS_DYNAMIC_ID = '0xeae3d57fca67bb68a9bfcac7af1f36ab964ad69a';

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
export const DEVNET_SWAP_PACKAGE_OBJECT_ID = '0xc653d96c0948b90b7b38c8c3778b42ad6500c535';
export const DEVNET_SWAP_GLOBAL_OBJECT_ID = '0xe6bef55ff046810e0e8ff9b9bef952536a482efa';
export const DEVNET_TESTCOIN_PACKAGE_OBJECT_ID = '0x085be9dd3821a992f69397963c183029fc1218cd';
export const DEVNET_TESTCOIN_GLOBAL_OBJECT_ID = '0x94303c60cac3f5c97a9c2b8260f083a1e3f17cd7';
export const DEVNET_POOLS_DYNAMIC_ID = '0xc6f7656c35e28bf54dff6aff5568609c5e5ac691';

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
  
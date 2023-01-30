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
export const DEVNET_SWAP_PACKAGE_OBJECT_ID = '0xb46514b7065b4fc58599f3d72824569d11ea4e6f';
export const DEVNET_SWAP_GLOBAL_OBJECT_ID = '0x94e77579219bd1032038ef7e4744273e1b144680';
export const DEVNET_TESTCOIN_PACKAGE_OBJECT_ID = '0xe110e6047d70a4c8b5a59d50ddfab29f609fa99d';
export const DEVNET_TESTCOIN_GLOBAL_OBJECT_ID = '0xb6e64590da5815c83e3c7cda68cd36d4f1bbcd5a';
export const DEVNET_POOLS_DYNAMIC_ID = '0x75e8e1042ac5530731b683135a3d40111d15151c';

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
  
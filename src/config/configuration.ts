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
  
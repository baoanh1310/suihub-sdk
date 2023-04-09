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
export const TESTNET_SWAP_PACKAGE_OBJECT_ID = '0x45596ee426f29225bf23e44b6719c931eb740932fad8c29b90eca9cf2006beec';
export const TESTNET_SWAP_GLOBAL_OBJECT_ID = '0x8cf8a17b288ddc434e17e8d6b82149c860f5576c73b89af4d2ff0dcff604d2c9';
export const TESTNET_TESTCOIN_PACKAGE_OBJECT_ID = '0xa7644965795a18b508a2ee42657a8cab344161f975c1b4f72762278e77eec6ce';
export const TESTNET_TESTCOIN_GLOBAL_OBJECT_ID = '0x67363093f04e65ddf869a2bcf4cae42ee167c49566750471b0466cac019a1662';
export const TESTNET_POOLS_DYNAMIC_ID = '0xe0154382732e78f6058ec2e9d837927e51b82f3b23d6354a811807cb63180fa0';

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
  
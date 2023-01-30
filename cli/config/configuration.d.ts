export declare class NetworkConfiguration {
    name: string;
    fullNodeUrl: string;
    packageObjectId: string;
    globalId: string;
    poolsDynamicId: string;
    faucetPackageId: string;
    faucetObjectId: string;
    isMainNet: boolean;
    constructor(name: string, fullNodeUrl: string, packageObjectId: string, globalId: string, poolsDynamicId: string, faucetPackageId: string, faucetObjectId: string, isMainNet?: boolean);
}
export declare const MAINNET_CONFIG: NetworkConfiguration;
export declare const TESTNET_RPC_URL = "https://fullnode.testnet.sui.io:443";
export declare const TESTNET_SWAP_PACKAGE_OBJECT_ID = "0x0235d33eb15185af711494de9ab03f9e8da4333a";
export declare const TESTNET_SWAP_GLOBAL_OBJECT_ID = "0x090124d79389067b98a3249fcd27164c0e8a8fa3";
export declare const TESTNET_TESTCOIN_PACKAGE_OBJECT_ID = "0xdd3fdee16e84f0e3800c2bb123c63ab7912e8c1f";
export declare const TESTNET_TESTCOIN_GLOBAL_OBJECT_ID = "0xbe372bd76e86780f78d94ee127c0330cadfb273c";
export declare const TESTNET_CONFIG: NetworkConfiguration;
export declare const CONFIGS: {
    mainnet: NetworkConfiguration;
    testnet: NetworkConfiguration;
};
//# sourceMappingURL=configuration.d.ts.map
import { Connection, JsonRpcProvider } from '@mysten/sui.js';
import { NetworkConfiguration } from '../config/configuration';
import { SwapModule,CoinModule,PoolModule, CoinListModule } from '../modules';

export class SDK {
    protected _jsonRpcProvider: JsonRpcProvider;
    protected _networkConfiguration: NetworkConfiguration;
    // protected _serializer: TxnDataSerializer;
    protected _swap:SwapModule;
    protected _pool:PoolModule;
    protected _token:CoinModule;
    protected _coinList: CoinListModule;
    
    get jsonRpcProvider() {
        return this._jsonRpcProvider;
    }

    get Swap() {
        return this._swap;
    }

    get Pool() {
        return this._pool;
    }

    get Coin() {
        return this._token;
    }

    get CoinList() {
        return this._coinList;
    }

    get networkOptions() {
        return this._networkConfiguration;
    }

    // get serializer() {
    //     return this._serializer;
    // }

    constructor(networkConfiguration:NetworkConfiguration) {
        // this._jsonRpcProvider = new JsonRpcProvider(networkConfiguration.fullNodeUrl);
        this._jsonRpcProvider = new JsonRpcProvider(new Connection({fullnode: networkConfiguration.fullNodeUrl}));
        // this._serializer = new RpcTxnDataSerializer(this._jsonRpcProvider.endpoints.fullNode, 
            // this._jsonRpcProvider.options.skipDataValidation!)
        this._networkConfiguration = networkConfiguration;
        this._swap = new SwapModule(this);
        this._token = new CoinModule(this);
        this._pool = new PoolModule(this);
        this._coinList = new CoinListModule(this);
    }
}
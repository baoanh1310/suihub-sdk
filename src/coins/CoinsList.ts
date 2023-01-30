import { RawCoinInfo } from "./types";
import { 
  TESTNET_BNB_COIN_TYPE,
  TESTNET_USDT_COIN_TYPE,
  TESTNET_XBTC_COIN_TYPE,
  TESTNET_WBTC_COIN_TYPE,
  TESTNET_BTC_COIN_TYPE,
  TESTNET_ETH_COIN_TYPE,
  TESTNET_DAI_COIN_TYPE,
  TESTNET_USDC_COIN_TYPE,
  DEVNET_BNB_COIN_TYPE,
  DEVNET_USDT_COIN_TYPE,
  DEVNET_XBTC_COIN_TYPE,
  DEVNET_WBTC_COIN_TYPE,
  DEVNET_BTC_COIN_TYPE,
  DEVNET_ETH_COIN_TYPE,
  DEVNET_DAI_COIN_TYPE,
  DEVNET_USDC_COIN_TYPE,
} from "../constants";

import { 
  TESTNET_SWAP_PACKAGE_OBJECT_ID,
  DEVNET_SWAP_PACKAGE_OBJECT_ID,
} from "../config";

export const REQUESTS_MAINNET: RawCoinInfo[] = [

  {
    "name": "Tether USD",
    "symbol": "USDT",
    "official_symbol": "USDT",
    "coingecko_id": "tether",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.svg",
    "project_url": "",
    "token_type": {
      "type": "0x6674cb08a6ef2a155b3c341a8697572898f0e4d1::usdt::USDT",
      "account_address": "0x6674cb08a6ef2a155b3c341a8697572898f0e4d1",
      "module_name": "usdt",
      "struct_name": "USDT"
    },
    "extensions": {
      "data": []
    }
  },
 
  {
    "name": "XBTC",
    "symbol": "XBTC",
    "official_symbol": "XBTC",
    "coingecko_id": "",
    "decimals": 8,
    "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
    "project_url": "https://github.com/baoanh1310/suihub-sdk",
    "token_type": {
      "type": "0x6674cb08a6ef2a155b3c341a8697572898f0e4d1::xbtc::XBTC",
      "account_address": "0x6674cb08a6ef2a155b3c341a8697572898f0e4d1",
      "module_name": "xbtc",
      "struct_name": "XBTC"
    },
    "extensions": {
      "data": []
    }
  },

    {
      "name": "Sui Coin",
      "symbol": "SUI",
      "official_symbol": "SUI",
      "coingecko_id": "Sui",
      "decimals": 9,
      "logo_url": "https://raw.githubusercontent.com/MystenLabs/sui/main/apps/wallet/src/ui/assets/images/sui-icon.png",
      "project_url": "http://sui.io/",
      "token_type": {
        "type": "0x2::sui::SUI",
        "account_address": "0x2",
        "module_name": "sui",
        "struct_name": "SUI"
      },
      "extensions": {
        "data": []
      }
    }
]

export const REQUESTS_TESTNET: RawCoinInfo[] = [

    {
      "name": "Tether USD",
      "symbol": "USDT",
      "official_symbol": "USDT",
      "coingecko_id": "tether",
      "decimals": 8,
      "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.svg",
      "project_url": "",
      "token_type": {
        "type": TESTNET_USDT_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "USDT"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "XBTC",
      "symbol": "XBTC",
      "official_symbol": "XBTC",
      "coingecko_id": "",
      "decimals": 8,
      "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
      "project_url": "https://github.com/baoanh1310/suihub-sdk",
      "token_type": {
        "type": TESTNET_XBTC_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "XBTC"
      },
      "extensions": {
        "data": []
      }
    },
    {
      "name": "Sui Coin",
      "symbol": "SUI",
      "official_symbol": "SUI",
      "coingecko_id": "Sui",
      "decimals": 9,
      "logo_url": "https://raw.githubusercontent.com/MystenLabs/sui/main/apps/wallet/src/ui/assets/images/sui-icon.png",
      "project_url": "http://sui.io/",
      "token_type": {
        "type": "0x2::sui::SUI",
        "account_address": "0x2",
        "module_name": "sui",
        "struct_name": "SUI"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "official_symbol": "BTC",
      "coingecko_id": "",
      "decimals": 8,
      "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
      "project_url": "https://github.com/baoanh1310/suihub-sdk",
      "token_type": {
        "type": TESTNET_BTC_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "BTC"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "Wrap Bitcoin",
      "symbol": "WBTC",
      "official_symbol": "WBTC",
      "coingecko_id": "",
      "decimals": 8,
      "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
      "project_url": "https://github.com/baoanh1310/suihub-sdk",
      "token_type": {
        "type": TESTNET_WBTC_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "WBTC"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "Binance Coin",
      "symbol": "BNB",
      "official_symbol": "BNB",
      "coingecko_id": "binancecoin",
      "decimals": 8,
      "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/BNB.svg",
      "project_url": "",
      "token_type": {
        "type": TESTNET_BNB_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "BNB"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "Ethereum",
      "symbol": "ETH",
      "official_symbol": "ETH",
      "coingecko_id": "eth",
      "decimals": 6,
      "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/WETH.svg",
      "project_url": "",
      "token_type": {
        "type": TESTNET_ETH_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "ETH"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "Dai",
      "symbol": "DAI",
      "official_symbol": "DAI",
      "coingecko_id": "dai",
      "decimals": 8,
      "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/DAI.svg",
      "project_url": "",
      "token_type": {
        "type": TESTNET_DAI_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "DAI"
      },
      "extensions": {
        "data": []
      }
    },

    {
      "name": "USD Coin",
      "symbol": "USDC",
      "official_symbol": "USDC",
      "coingecko_id": "usd-coin",
      "decimals": 8,
      "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDC.svg",
      "project_url": "",
      "token_type": {
        "type": TESTNET_USDC_COIN_TYPE,
        "account_address": TESTNET_SWAP_PACKAGE_OBJECT_ID,
        "module_name": "coins",
        "struct_name": "USDC"
      },
      "extensions": {
        "data": []
      }
    },
]

export const REQUESTS_DEVNET: RawCoinInfo[] = [

  {
    "name": "Tether USD",
    "symbol": "USDT",
    "official_symbol": "USDT",
    "coingecko_id": "tether",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.svg",
    "project_url": "",
    "token_type": {
      "type": DEVNET_USDT_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "USDT"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "XBTC",
    "symbol": "XBTC",
    "official_symbol": "XBTC",
    "coingecko_id": "",
    "decimals": 8,
    "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
    "project_url": "https://github.com/baoanh1310/suihub-sdk",
    "token_type": {
      "type": DEVNET_XBTC_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "XBTC"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "Sui Coin",
    "symbol": "SUI",
    "official_symbol": "SUI",
    "coingecko_id": "Sui",
    "decimals": 9,
    "logo_url": "https://raw.githubusercontent.com/MystenLabs/sui/main/apps/wallet/src/ui/assets/images/sui-icon.png",
    "project_url": "http://sui.io/",
    "token_type": {
      "type": "0x2::sui::SUI",
      "account_address": "0x2",
      "module_name": "sui",
      "struct_name": "SUI"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "Bitcoin",
    "symbol": "BTC",
    "official_symbol": "BTC",
    "coingecko_id": "",
    "decimals": 8,
    "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
    "project_url": "https://github.com/baoanh1310/suihub-sdk",
    "token_type": {
      "type": DEVNET_BTC_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "BTC"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "Wrap Bitcoin",
    "symbol": "WBTC",
    "official_symbol": "WBTC",
    "coingecko_id": "",
    "decimals": 8,
    "logo_url": "https://coming-website.s3.us-east-2.amazonaws.com/icon_xbtc_30.png",
    "project_url": "https://github.com/baoanh1310/suihub-sdk",
    "token_type": {
      "type": DEVNET_WBTC_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "WBTC"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "Binance Coin",
    "symbol": "BNB",
    "official_symbol": "BNB",
    "coingecko_id": "binancecoin",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/BNB.svg",
    "project_url": "",
    "token_type": {
      "type": DEVNET_BNB_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "BNB"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "Ethereum",
    "symbol": "ETH",
    "official_symbol": "ETH",
    "coingecko_id": "eth",
    "decimals": 6,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/WETH.svg",
    "project_url": "",
    "token_type": {
      "type": DEVNET_ETH_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "ETH"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "Dai",
    "symbol": "DAI",
    "official_symbol": "DAI",
    "coingecko_id": "dai",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/DAI.svg",
    "project_url": "",
    "token_type": {
      "type": DEVNET_DAI_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "DAI"
    },
    "extensions": {
      "data": []
    }
  },

  {
    "name": "USD Coin",
    "symbol": "USDC",
    "official_symbol": "USDC",
    "coingecko_id": "usd-coin",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDC.svg",
    "project_url": "",
    "token_type": {
      "type": DEVNET_USDC_COIN_TYPE,
      "account_address": DEVNET_SWAP_PACKAGE_OBJECT_ID,
      "module_name": "coins",
      "struct_name": "USDC"
    },
    "extensions": {
      "data": []
    }
  },
]
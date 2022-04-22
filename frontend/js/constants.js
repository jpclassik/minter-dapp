const contractAddress = "0x3d078A20D84B335359E7396fD32A6a98e2c11a37"; //Replace with your own contract address
const chain = 'rinkeby'; // rinkeby or polygon

const welcome_h1 = "Welcome to the Gentle Doggies Serum NFT Project!!";
const welcome_h2 = "Connect to MetaMask to Get Started";
const welcome_p = 'The Gentle Doggies Serum NFT Project is a decentralized, open-source project that aims to demonstrate how to develope and launch your own NFT Collection. Follow step by step on the <a href="https://youtube.com/codestackr"  target="_blank" rel="noopener noreferrer">codeSTACKr</a> YouTube channel.';
const h1_presale_coming_soon = "NFT Drop Coming Soon!!";
const h1_presale_mint = "Pre-Sale Minting Open!!";
const h1_public_mint = "Public Minting Open!!";
const h2_presale_coming_soon = "Pre-Sale Minting Countdown";
const h2_presale_mint = "Public Minting Countdown";
const p_presale_coming_soon = "We are working hard to launch the NFT Collection. Stay tuned for updates!";
const p_presale_mint_not_whitelisted = "You are not whitelisted for the pre-sale.. 😢";
const p_presale_mint_whitelisted = "You're on the whitelist for the pre-sale! 🎉";
const p_presale_mint_already_minted = "You've already claimed your whitelist mint. Thank you! 🎉";
const p_public_mint = "No whitelist needed. Public minting is now open! 🎉";
const button_presale_coming_soon = "Get on the Whitelist";
const button_presale_mint_whitelisted = "Mint Your Special NFT";
const button_presale_mint_not_whitelisted = "Get on the Whitelist";
const button_presale_already_minted = "Join The Community";
const button_public_mint = "Mint Your NFT";
const mint_failed = "Minting failed. 😢 Please try again.";

const abi = [
  [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_layerZeroEndpoint",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_startMintId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endMintId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "_payload",
          "type": "bytes"
        }
      ],
      "name": "MessageFailed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_toAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        }
      ],
      "name": "ReceiveFromChain",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "indexed": true,
          "internalType": "bytes",
          "name": "_toAddress",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        }
      ],
      "name": "SendToChain",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        }
      ],
      "name": "SetTrustedRemote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "failedMessages",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        }
      ],
      "name": "forceResumeReceive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "_chainId",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_configType",
          "type": "uint256"
        }
      ],
      "name": "getConfig",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLzEndpoint",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_chainId",
          "type": "uint16"
        }
      ],
      "name": "getTrustedRemote",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        }
      ],
      "name": "isTrustedRemote",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "_payload",
          "type": "bytes"
        }
      ],
      "name": "lzReceive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxMintAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxMintId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextMintId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "_payload",
          "type": "bytes"
        }
      ],
      "name": "nonblockingLzReceive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "presaleCost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "presaleWallets",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "_payload",
          "type": "bytes"
        }
      ],
      "name": "retryMessage",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_toAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_zroPaymentAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_adapterParam",
          "type": "bytes"
        }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_toAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_zroPaymentAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_adapterParam",
          "type": "bytes"
        }
      ],
      "name": "sendFrom",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_baseTokenURI",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_version",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "_chainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_configType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_config",
          "type": "bytes"
        }
      ],
      "name": "setConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_version",
          "type": "uint16"
        }
      ],
      "name": "setReceiveVersion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_version",
          "type": "uint16"
        }
      ],
      "name": "setSendVersion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        }
      ],
      "name": "setTrustedRemote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "whitelistUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
];

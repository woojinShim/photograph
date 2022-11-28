const SmartContract = {
  nftAddress: "0x631C8Ebfd127f72cF244dC46B09cc8bc8A583e05",
  marketAddress: "0x024437cAc8B345B5c7B2805281b6d970f605707b",
  abi: {
      nftABI: [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "BadRequest",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedToSendBalance",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "MintingFailed",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "NotOwnerNorAdmin",
          "type": "error"
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
              "internalType": "string",
              "name": "baseURI",
              "type": "string"
            }
          ],
          "name": "BaseURIUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "defaultURI",
              "type": "string"
            }
          ],
          "name": "DefaultURIUpdated",
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
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Received",
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
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "name": "Admin",
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
          "name": "baseURI",
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
              "name": "newAdmin",
              "type": "address"
            }
          ],
          "name": "changeAdmin",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "defaultURI",
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
          "inputs": [],
          "name": "getBalance",
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
          "name": "getBaseURI",
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
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "getUserNFTList",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
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
          "inputs": [],
          "name": "lastTokenId",
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
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
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
          "name": "pause",
          "outputs": [],
          "stateMutability": "nonpayable",
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
          "name": "renounceOwnership",
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
              "name": "_newBaseURI",
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
              "internalType": "string",
              "name": "_defaultURI",
              "type": "string"
            }
          ],
          "name": "setDefaultURI",
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
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "tokenByIndex",
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
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "tokenOfOwnerByIndex",
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
          "inputs": [],
          "name": "totalSupply",
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
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "transferBatch",
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
          "inputs": [],
          "name": "unpause",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      marketABI: [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [],
            "name": "FailedToSendBalance",
            "type": "error"
          },
          {
            "inputs": [],
            "name": "NoMatchingPrice",
            "type": "error"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "name": "BidNft",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "name": "BuyNft",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              }
            ],
            "name": "CancelSale",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "beforePrice",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "afterPrice",
                "type": "uint256"
              }
            ],
            "name": "ChangeSalePrice",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "name": "EndAuction",
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
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "Paused",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "Received",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
              }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "RoleGranted",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "RoleRevoked",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "name": "SellNft",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "minPrice",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              }
            ],
            "name": "StartAuction",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "Unpaused",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "Withdraw",
            "type": "event"
          },
          {
            "stateMutability": "payable",
            "type": "fallback"
          },
          {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
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
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_auctions",
            "outputs": [
              {
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "minPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "highBidIndex",
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
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_auctionsId",
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
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_auctionsIndex",
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
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_bidList",
            "outputs": [
              {
                "internalType": "address",
                "name": "bidder",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
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
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_sales",
            "outputs": [
              {
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "price",
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
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_salesId",
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
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "_salesIndex",
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
                "name": "account",
                "type": "address"
              }
            ],
            "name": "addAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "bidNft",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "bids",
            "outputs": [
              {
                "internalType": "address",
                "name": "bidder",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
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
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "buyNft",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "cancelSale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
              }
            ],
            "name": "changeSalePrice",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "endAuction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "getAuction",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "minPrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "highBidIndex",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct Marketplace.Auction",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              }
            ],
            "name": "getAuctionCount",
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
                "name": "_addr",
                "type": "address"
              }
            ],
            "name": "getAuctionIdList",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "getAuctionIndex",
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
            "name": "getBalance",
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
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "getBidCount",
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
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "getBidList",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "bidder",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct Marketplace.Bid[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              }
            ],
            "name": "getRoleAdmin",
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
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              }
            ],
            "name": "getSalesCount",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "hasRole",
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
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "removeAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
              }
            ],
            "name": "sellNft",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "setAuctionExpiration",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_minPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "sched",
                "type": "uint256"
              }
            ],
            "name": "startAuction",
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
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "stateMutability": "payable",
            "type": "receive"
          }
        ],
  },
  bytecode: "0x60806040523480156200001157600080fd5b50604080518082018252600f81526e1d1b93595d1848139195081d195cdd608a1b60208083019182528351808501909452600e84526d1d1b9b595d18539195081d195cdd60921b9084015281519192916200006f9160009162000119565b5080516200008590600190602084019062000119565b505050620000a26200009c620000c360201b60201c565b620000c7565b6001600b55600c80546001600160a81b0319163361010002179055620001fc565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012790620001bf565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b600181811c90821680620001d457607f821691505b60208210811415620001f657634e487b7160e01b600052602260045260246000fd5b50919050565b61289a806200020c6000396000f3fe6080604052600436106102085760003560e01c80635c975abb1161011857806395d89b41116100a0578063da1b9e081161006f578063da1b9e08146105fa578063e985e9c51461061a578063f2fde38b14610663578063f84ddf0b14610683578063ff1b636d1461069957610252565b806395d89b4114610585578063a22cb4651461059a578063b88d4fde146105ba578063c87b56dd146105da57610252565b8063714c5398116100e7578063714c539814610508578063715018a61461051d5780638456cb59146105325780638da5cb5b146105475780638f2839701461056557610252565b80635c975abb1461049b5780636352211e146104b35780636c0360eb146104d357806370a08231146104e857610252565b806323b872dd1161019b5780633f4ba83a1161016a5780633f4ba83a1461040657806340c10f191461041b57806342842e0e1461043b5780634f6ccce71461045b57806355f804b31461047b57610252565b806323b872dd146103a95780632f745c59146103c95780633a367a67146103e95780633ccfd60b146103fe57610252565b8063081812fc116101d7578063081812fc1461031f578063095ea7b31461035757806312065fe01461037757806318160ddd1461039457610252565b806301ffc9a7146102795780630202def1146102ae5780630364a011146102d057806306fdde03146102fd57610252565b36610252577f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874335b604080516001600160a01b0390921682523460208301520160405180910390a1005b7f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587433610230565b34801561028557600080fd5b50610299610294366004612382565b6106be565b60405190151581526020015b60405180910390f35b3480156102ba57600080fd5b506102ce6102c9366004612303565b6106e9565b005b3480156102dc57600080fd5b506102f06102eb366004612199565b610773565b6040516102a59190612569565b34801561030957600080fd5b50610312610831565b6040516102a591906125ad565b34801561032b57600080fd5b5061033f61033a366004612400565b6108c3565b6040516001600160a01b0390911681526020016102a5565b34801561036357600080fd5b506102ce6103723660046122da565b610958565b34801561038357600080fd5b50475b6040519081526020016102a5565b3480156103a057600080fd5b50600854610386565b3480156103b557600080fd5b506102ce6103c43660046121ec565b610a6e565b3480156103d557600080fd5b506103866103e43660046122da565b610a9f565b3480156103f557600080fd5b50610312610b35565b6102ce610bc3565b34801561041257600080fd5b506102ce610cbc565b34801561042757600080fd5b506102ce6104363660046122da565b610cf0565b34801561044757600080fd5b506102ce6104563660046121ec565b610e09565b34801561046757600080fd5b50610386610476366004612400565b610e24565b34801561048757600080fd5b506102ce6104963660046123ba565b610ec5565b3480156104a757600080fd5b50600c5460ff16610299565b3480156104bf57600080fd5b5061033f6104ce366004612400565b610f8b565b3480156104df57600080fd5b50610312611002565b3480156104f457600080fd5b50610386610503366004612199565b61100f565b34801561051457600080fd5b50610312611096565b34801561052957600080fd5b506102ce6110a5565b34801561053e57600080fd5b506102ce6110d9565b34801561055357600080fd5b50600a546001600160a01b031661033f565b34801561057157600080fd5b506102ce610580366004612199565b61110b565b34801561059157600080fd5b506103126111a6565b3480156105a657600080fd5b506102ce6105b53660046122a0565b6111b5565b3480156105c657600080fd5b506102ce6105d5366004612227565b6111c4565b3480156105e657600080fd5b506103126105f5366004612400565b6111fc565b34801561060657600080fd5b506102ce6106153660046123ba565b6112d6565b34801561062657600080fd5b506102996106353660046121ba565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561066f57600080fd5b506102ce61067e366004612199565b611391565b34801561068f57600080fd5b50610386600f5481565b3480156106a557600080fd5b50600c5461033f9061010090046001600160a01b031681565b60006001600160e01b0319821663780e9d6360e01b14806106e357506106e38261142c565b92915050565b6002600b5414156107155760405162461bcd60e51b815260040161070c906126fc565b60405180910390fd5b6002600b5560005b8281101561076857610756338386868581811061074a57634e487b7160e01b600052603260045260246000fd5b90506020020135610e09565b80610760816127dd565b91505061071d565b50506001600b555050565b606060006107808361100f565b905060008167ffffffffffffffff8111156107ab57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156107d4578160200160208202803683370190505b50905060005b82811015610829576107ec8582610a9f565b82828151811061080c57634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610821816127dd565b9150506107da565b509392505050565b606060008054610840906127a2565b80601f016020809104026020016040519081016040528092919081815260200182805461086c906127a2565b80156108b95780601f1061088e576101008083540402835291602001916108b9565b820191906000526020600020905b81548152906001019060200180831161089c57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661093c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161070c565b506000908152600460205260409020546001600160a01b031690565b600061096382610f8b565b9050806001600160a01b0316836001600160a01b031614156109d15760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161070c565b336001600160a01b03821614806109ed57506109ed8133610635565b610a5f5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161070c565b610a69838361147c565b505050565b610a7833826114ea565b610a945760405162461bcd60e51b815260040161070c906126ab565b610a698383836115e1565b6000610aaa8361100f565b8210610b0c5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161070c565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600e8054610b42906127a2565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6e906127a2565b8015610bbb5780601f10610b9057610100808354040283529160200191610bbb565b820191906000526020600020905b815481529060010190602001808311610b9e57829003601f168201915b505050505081565b600a546001600160a01b03163314610bed5760405162461bcd60e51b815260040161070c90612676565b6002600b541415610c105760405162461bcd60e51b815260040161070c906126fc565b6002600b556040514790600090339083908381818185875af1925050503d8060008114610c59576040519150601f19603f3d011682016040523d82523d6000602084013e610c5e565b606091505b5050905080610c805760405163ce43c9c560e01b815260040160405180910390fd5b6040518281527f5b6b431d4476a211bb7d41c20d1aab9ae2321deee0d20be3d9fc9b1093fa6e3d9060200160405180910390a150506001600b55565b600a546001600160a01b03163314610ce65760405162461bcd60e51b815260040161070c90612676565b610cee611788565b565b600c5461010090046001600160a01b0316610d1e57604051632c73a0bf60e11b815260040161070c90612649565b600c546001600160a01b03610100909104163314801590610d4a5750600a546001600160a01b03163314155b15610d68576040516305a0a2dd60e41b815260040161070c906125c0565b600c5460ff1615610dae5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161070c565b60005b81811015610a6957600f8054906000610dc9836127dd565b9190505550610dda83600f5461181b565b610df75760405163805da64960e01b815260040160405180910390fd5b80610e01816127dd565b915050610db1565b610a69838383604051806020016040528060008152506111c4565b6000610e2f60085490565b8210610e925760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161070c565b60088281548110610eb357634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b600c5461010090046001600160a01b0316610ef357604051632c73a0bf60e11b815260040161070c90612649565b600c546001600160a01b03610100909104163314801590610f1f5750600a546001600160a01b03163314155b15610f3d576040516305a0a2dd60e41b815260040161070c906125c0565b8051610f5090600d90602084019061206e565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad81604051610f8091906125ad565b60405180910390a150565b6000818152600260205260408120546001600160a01b0316806106e35760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161070c565b600d8054610b42906127a2565b60006001600160a01b03821661107a5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161070c565b506001600160a01b031660009081526003602052604090205490565b60606110a061185c565b905090565b600a546001600160a01b031633146110cf5760405162461bcd60e51b815260040161070c90612676565b610cee600061186b565b600a546001600160a01b031633146111035760405162461bcd60e51b815260040161070c90612676565b610cee6118bd565b600a546001600160a01b031633146111355760405162461bcd60e51b815260040161070c90612676565b600c546001600160a01b0361010090910416331415806111605750600a546001600160a01b03163314155b1561117e576040516305a0a2dd60e41b815260040161070c906125c0565b600c80546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b606060018054610840906127a2565b6111c0338383611938565b5050565b6111ce33836114ea565b6111ea5760405162461bcd60e51b815260040161070c906126ab565b6111f684848484611a07565b50505050565b6000818152600260205260409020546060906001600160a01b031661127d5760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b606482015260840161070c565b600d805461128a906127a2565b151590506112ba57600e6040516020016112a491906124dc565b6040516020818303038152906040529050919050565b600d6112c583611a3a565b6040516020016112a49291906124e8565b600c5461010090046001600160a01b031661130457604051632c73a0bf60e11b815260040161070c90612649565b600c546001600160a01b036101009091041633148015906113305750600a546001600160a01b03163314155b1561134e576040516305a0a2dd60e41b815260040161070c906125c0565b805161136190600e90602084019061206e565b507fd2bc967bbe8415901898897289f2a34de3bde16de1ab5fc5a57a682844bf565381604051610f8091906125ad565b600a546001600160a01b031633146113bb5760405162461bcd60e51b815260040161070c90612676565b6001600160a01b0381166114205760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161070c565b6114298161186b565b50565b60006001600160e01b031982166380ac58cd60e01b148061145d57506001600160e01b03198216635b5e139f60e01b145b806106e357506301ffc9a760e01b6001600160e01b03198316146106e3565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906114b182610f8b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166115635760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161070c565b600061156e83610f8b565b9050806001600160a01b0316846001600160a01b031614806115b557506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806115d95750836001600160a01b03166115ce846108c3565b6001600160a01b0316145b949350505050565b826001600160a01b03166115f482610f8b565b6001600160a01b0316146116585760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161070c565b6001600160a01b0382166116ba5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161070c565b6116c5838383611b54565b6116d060008261147c565b6001600160a01b03831660009081526003602052604081208054600192906116f990849061275f565b90915550506001600160a01b0382166000908152600360205260408120805460019290611727908490612733565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600c5460ff166117d15760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161070c565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60006002600b5414156118405760405162461bcd60e51b815260040161070c906126fc565b6002600b5561184f8383611c0c565b50600180600b5592915050565b6060600d8054610840906127a2565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600c5460ff16156119035760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161070c565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586117fe3390565b816001600160a01b0316836001600160a01b0316141561199a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161070c565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611a128484846115e1565b611a1e84848484611c26565b6111f65760405162461bcd60e51b815260040161070c906125f7565b606081611a5e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611a885780611a72816127dd565b9150611a819050600a8361274b565b9150611a62565b60008167ffffffffffffffff811115611ab157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611adb576020820181803683370190505b5090505b84156115d957611af060018361275f565b9150611afd600a866127f8565b611b08906030612733565b60f81b818381518110611b2b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611b4d600a8661274b565b9450611adf565b6001600160a01b038316611baf57611baa81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611bd2565b816001600160a01b0316836001600160a01b031614611bd257611bd28382611d33565b6001600160a01b038216611be957610a6981611dd0565b826001600160a01b0316826001600160a01b031614610a6957610a698282611ea9565b6111c0828260405180602001604052806000815250611eed565b60006001600160a01b0384163b15611d2857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611c6a90339089908890889060040161252c565b602060405180830381600087803b158015611c8457600080fd5b505af1925050508015611cb4575060408051601f3d908101601f19168201909252611cb19181019061239e565b60015b611d0e573d808015611ce2576040519150601f19603f3d011682016040523d82523d6000602084013e611ce7565b606091505b508051611d065760405162461bcd60e51b815260040161070c906125f7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506115d9565b506001949350505050565b60006001611d408461100f565b611d4a919061275f565b600083815260076020526040902054909150808214611d9d576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611de29060019061275f565b60008381526009602052604081205460088054939450909284908110611e1857634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508060088381548110611e4757634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611e8d57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611eb48361100f565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b611ef78383611f20565b611f046000848484611c26565b610a695760405162461bcd60e51b815260040161070c906125f7565b6001600160a01b038216611f765760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161070c565b6000818152600260205260409020546001600160a01b031615611fdb5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161070c565b611fe760008383611b54565b6001600160a01b0382166000908152600360205260408120805460019290612010908490612733565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461207a906127a2565b90600052602060002090601f01602090048101928261209c57600085556120e2565b82601f106120b557805160ff19168380011785556120e2565b828001600101855582156120e2579182015b828111156120e25782518255916020019190600101906120c7565b506120ee9291506120f2565b5090565b5b808211156120ee57600081556001016120f3565b600067ffffffffffffffff8084111561212257612122612838565b604051601f8501601f19908116603f0116810190828211818310171561214a5761214a612838565b8160405280935085815286868601111561216357600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461219457600080fd5b919050565b6000602082840312156121aa578081fd5b6121b38261217d565b9392505050565b600080604083850312156121cc578081fd5b6121d58361217d565b91506121e36020840161217d565b90509250929050565b600080600060608486031215612200578081fd5b6122098461217d565b92506122176020850161217d565b9150604084013590509250925092565b6000806000806080858703121561223c578081fd5b6122458561217d565b93506122536020860161217d565b925060408501359150606085013567ffffffffffffffff811115612275578182fd5b8501601f81018713612285578182fd5b61229487823560208401612107565b91505092959194509250565b600080604083850312156122b2578182fd5b6122bb8361217d565b9150602083013580151581146122cf578182fd5b809150509250929050565b600080604083850312156122ec578182fd5b6122f58361217d565b946020939093013593505050565b600080600060408486031215612317578283fd5b833567ffffffffffffffff8082111561232e578485fd5b818601915086601f830112612341578485fd5b81358181111561234f578586fd5b8760208260051b8501011115612363578586fd5b602092830195509350612379918601905061217d565b90509250925092565b600060208284031215612393578081fd5b81356121b38161284e565b6000602082840312156123af578081fd5b81516121b38161284e565b6000602082840312156123cb578081fd5b813567ffffffffffffffff8111156123e1578182fd5b8201601f810184136123f1578182fd5b6115d984823560208401612107565b600060208284031215612411578081fd5b5035919050565b60008151808452612430816020860160208601612776565b601f01601f19169290920160200192915050565b8054600090600181811c908083168061245e57607f831692505b602080841082141561247e57634e487b7160e01b86526022600452602486fd5b81801561249257600181146124a3576124d0565b60ff198616895284890196506124d0565b60008881526020902060005b868110156124c85781548b8201529085019083016124af565b505084890196505b50505050505092915050565b60006121b38284612444565b60006124f48285612444565b602f60f81b8152835161250e816001840160208801612776565b64173539b7b760d91b60019290910191820152600601949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061255f90830184612418565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156125a157835183529284019291840191600101612585565b50909695505050505050565b6020815260006121b36020830184612418565b60208082526017908201527f63616c6c6572206973206e6f74207468652041646d696e000000000000000000604082015260600190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252601390820152724e6f7420616c6c6f776564206164647265737360681b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600082198211156127465761274661280c565b500190565b60008261275a5761275a612822565b500490565b6000828210156127715761277161280c565b500390565b60005b83811015612791578181015183820152602001612779565b838111156111f65750506000910152565b600181811c908216806127b657607f821691505b602082108114156127d757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156127f1576127f161280c565b5060010190565b60008261280757612807612822565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461142957600080fdfea264697066735822122019125ca359a165b7d9ba78f5693044a9c98c2c52ec821240f68c939e438cc30b64736f6c63430008040033"
}
module.exports = SmartContract
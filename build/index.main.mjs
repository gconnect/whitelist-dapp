// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v53, time: v52, didSend: v23, from: v51 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v53, time: v52, didSend: v23, from: v51 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.collectAddress(v51), {
    at: './index.rsh:38:58:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)'],
    msg: 'collectAddress',
    who: 'Alice'
    });
  const v56 = stdlib.protect(ctc2, await interact.getAddress(), {
    at: './index.rsh:39:45:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)'],
    msg: 'getAddress',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v51, null, v56],
    evt_cnt: 2,
    funcNum: 1,
    lct: v52,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v59, v60], secs: v62, time: v61, didSend: v35, from: v58 } = txn2;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v51, v60);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v59, v60], secs: v62, time: v61, didSend: v35, from: v58 } = txn2;
  ;
  const v63 = stdlib.addressEq(v51, v58);
  stdlib.assert(v63, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  await stdlib.mapSet(map0, v51, v60);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v66, time: v65, didSend: v39, from: v64 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v53, time: v52, didSend: v23, from: v51 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v59, v60], secs: v62, time: v61, didSend: v35, from: v58 } = txn2;
  ;
  const v63 = stdlib.addressEq(v51, v58);
  stdlib.assert(v63, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  await stdlib.mapSet(map0, v51, v60);
  const txn3 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 2,
    lct: v61,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v66, time: v65, didSend: v39, from: v64 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v66, time: v65, didSend: v39, from: v64 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBMSlkSSJbNQGBCFs1AjEZIxJBAAoxACiBIa9mQgD9NhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAb0kkDEAAHSQSRCQ0ARJENARJIhJMNAISEUSABEGxQE2wQgB/SCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFSUgpNf5XACA1/YAEEmRORTT+UDT9ULA0/zEAEkQ0/yiAAQE0/VBmJDUBMgY1AkIAT0iBoI0GiACYIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 33,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v59",
                "type": "bool"
              },
              {
                "internalType": "address payable[1]",
                "name": "v60",
                "type": "address[1]"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
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
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
    "name": "_reachCurrentTime",
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
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable[1]",
            "name": "_Some",
            "type": "address[1]"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v59",
                "type": "bool"
              },
              {
                "internalType": "address payable[1]",
                "name": "v60",
                "type": "address[1]"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c5438038062000c548339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b6109f8806200025c6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf146100835780636b777db5146100b05780637eea518c146100c357806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e36600461072d565b61010e565b60405161007a9190610767565b61005d6100be3660046107d6565b610125565b61005d6100d13660046107ee565b6102d8565b3480156100e257600080fd5b50600154610070565b3480156100f757600080fd5b50610100610406565b60405161007a929190610800565b6101166105ba565b61011f826104a3565b92915050565b610135600160005414600a610595565b61014f8135158061014857506001548235145b600b610595565b6000808055600280546101619061085d565b80601f016020809104026020016040519081016040528092919081815260200182805461018d9061085d565b80156101da5780601f106101af576101008083540402835291602001916101da565b820191906000526020600020905b8154815290600101906020018083116101bd57829003601f168201915b50505050508060200190518101906101f29190610892565b90507ff57cdca3cb41174699a7b9b216bec7de693ae67908695516399319f8f3389e2433836040516102259291906108fa565b60405180910390a161023934156008610595565b8051610251906001600160a01b031633146009610595565b80516001600160a01b03908116600090815260046020526040808220805460ff19166001908117909155845190931682529081902061029692908101918501906105de565b506002600090815543600155604080516020810183905201604051602081830303815290604052600290805190602001906102d2929190610634565b50505050565b6102e8600260005414600d610595565b610302813515806102fb57506001548235145b600e610595565b6000808055600280546103149061085d565b80601f01602080910402602001604051908101604052809291908181526020018280546103409061085d565b801561038d5780601f106103625761010080835404028352916020019161038d565b820191906000526020600020905b81548152906001019060200180831161037057829003601f168201915b50505050508060200190518101906103a5919061096d565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103d892919061098a565b60405180910390a16103ec3415600c610595565b60008080556001819055610402906002906106a8565b5050565b60006060600054600280805461041b9061085d565b80601f01602080910402602001604051908101604052809291908181526020018280546104479061085d565b80156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b50505050509050915091509091565b6104ab6105ba565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156104da576104da610751565b1415610586576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561051b5761051b610751565b600181111561052c5761052c610751565b81528154610100900460ff1615156020808301919091526040805191820180825292019160018085019182845b81546001600160a01b03168152600190910190602001808311610559575050505050815250509050919050565b60008082526020820152919050565b816104025760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051606081018252600080825260208201529081016105d96106e5565b905290565b8260018101928215610624579160200282015b828111156106245781546001600160a01b0319166001600160a01b038435161782556020909201916001909101906105f1565b50610630929150610703565b5090565b8280546106409061085d565b90600052602060002090601f0160209004810192826106625760008555610624565b82601f1061067b57805160ff1916838001178555610624565b82800160010185558215610624579182015b8281111561062457825182559160200191906001019061068d565b5080546106b49061085d565b6000825580601f106106c4575050565b601f0160209004906000526020600020908101906106e29190610703565b50565b60405180602001604052806001906020820280368337509192915050565b5b808211156106305760008155600101610704565b6001600160a01b03811681146106e257600080fd5b60006020828403121561073f57600080fd5b813561074a81610718565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061078c57634e487b7160e01b600052602160045260246000fd5b825260208381015115158184015260408085015190840160005b60018110156107cc5782516001600160a01b0316825291830191908301906001016107a6565b5050505092915050565b6000606082840312156107e857600080fd5b50919050565b6000604082840312156107e857600080fd5b82815260006020604081840152835180604085015260005b8181101561083457858101830151858201606001528201610818565b81811115610846576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061087157607f821691505b602082108114156107e857634e487b7160e01b600052602260045260246000fd5b6000602082840312156108a457600080fd5b6040516020810181811067ffffffffffffffff821117156108d557634e487b7160e01b600052604160045260246000fd5b60405282516108e381610718565b81529392505050565b80151581146106e257600080fd5b6001600160a01b038381168252823560208084019190915260808301919084810135610925816108ec565b801515604086015250606084016040860160005b600181101561096157813561094d81610718565b851683529183019190830190600101610939565b50505050509392505050565b60006020828403121561097f57600080fd5b815161074a816108ec565b6001600160a01b0383168152813560208083019190915260608201908301356109b2816108ec565b801515604084015250939250505056fea2646970667358221220d96e8d69cee005beac3f558370b16fef0243937b44c1c6fcdd289ffa802420a964736f6c634300080c0033`,
  BytecodeLen: 3156,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };

import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

// - Create starting balance
const startingBalance = stdlib.parseCurrency(100);

// - Create test account
const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');

// - Alice deploy the contract
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');

const addresses = []
// ["IQ7UESMB2RHOGCBXJP5S3KZUDLTSGSTKLPSS4DDFZHVXNYAZRBFYV4EWRM", 
// "E2BCG7PP4PV3NCC72SWIJ6ZSRM5OH3SLIR5BQFTJBPYZIK5WYE4US5OCJI"]

let whitelistAddress;

const createWhiteList  = (address) => {
   address = whitelistAddress
}

// - Alice transfer token to the first five whitelisted account and confirm they have opted in to the asset 
// - optin to the asset
// - receive token
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    collectAddress: (address) => {
      console.log("Address collected " + address)
      addresses.push(address)
      whitelistAddress = address
    },
    getAddress : () => {
      console.log("get Address " + addresses)
      return addresses
    }
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    sendAddress: () => {
      console.log("address submited")
    }
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');

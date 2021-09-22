require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note remember upgrade idea kitten swift tennis'; 
let testAccounts = [
"0xd21029110840dfe7d90f0a5469c7a48ae2b1a8670a6d61e142a51116211e1d29",
"0x66ae8bdc7c29290fa46df39cccd129c9c2599e5d03da7e45ad149dcd52bd8bd7",
"0xe5d46ecdbfa1ea96228b30d9914af6adb2db2f5ed84cd161a28287b6d9808dc3",
"0x40f1e111422089b4d3a0a4b138aee3fcbfc0be8cbdb84734d4965ece99b69fb1",
"0x0f4d1ac31edadd10a409b5f435de91d956e03c32b258c21056a32b927009f009",
"0x0003a2350932ef8413e3881c25dc0d1ab738f9f934761b2fee06b5f4ba3029ad",
"0x77ad7ba85025ddc7868ac0fe9d26c96853aff1fe355947cd1d636044da27b0d1",
"0x80f4e3133f8d2c9830009981cf2fff99ede13e414076e0c62457a34dad7bf59a",
"0xb4d6f62bd7f71c9ee3e124f0d0d4557f4a5474c24ebb927a3e773b483935afa5",
"0x601965e6374522edd5ce6ec4dfff5bad41ecffe446f11c254fc06e06a37289b0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rifle spike erosion gloom kitchen sun gesture'; 
let testAccounts = [
"0x0b568044e290ed4c1d80d579eaaf406b1ac9518982bc73f43758d117f558bdfa",
"0x1b0c88e17c7d626134adc1252b95aee3b53e06345802af7ffa61fa4cbd6a6eae",
"0x95783cb3c272fc9279f450d63239e8bf60897e5996771ba84f5cd047c8e912ae",
"0xc5f8008a59c8e9d15e77386a1454894ca1fc17e5accf52ba3141301eb3c1b26a",
"0x26924278bc10f18f053850fd2adf2b61a1ec732c5b815a535e23b8d1c9f25ac2",
"0xab5a7241bada636360e2614c2c90cf95b5e63f7275fa428a31967f47086a4f7d",
"0x02313d7fbb0e4eecdfa978616eb508852d1574d09bb0f9672ccb69584c240c93",
"0x800c61d63a3815d36d28b568e88381c90c8e8c1f292b4abdc1584cafcb05a81e",
"0x6dad18de0322ec3f5b273feeb11db8c1c6bddc856dc23b815935c02c0df8ba5f",
"0xe0fa105eb83dbf338bf3c8b26d256503b109f04956640ca96cdd269b051483e5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


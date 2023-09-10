// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };

//https://eth-sepolia.g.alchemy.com/v2/PizNHY7X79JPDNL-M1mUrNXHi8N7CA_S

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/PizNHY7X79JPDNL-M1mUrNXHi8N7CA_S',
      accounts: ['90f03e68deb8a662e1f2269466707399b1bc5d161657d185ec18774f379fa7e1'],
    }
  }
} 
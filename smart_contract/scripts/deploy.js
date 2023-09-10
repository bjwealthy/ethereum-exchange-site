const { ethers, JsonRpcProvider } = require('ethers');


const main = async () => {
    //for generating instaces of our contract
    const Transactions = await hre.ethers.getContractFactory('Transactions');
    //an instance of our contract
    const transactions = await Transactions.deploy();

    await transactions.deployed()
   
    console.log('Transactions deployed to: ', transactions.address)
}

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
       console.error(error);
       process.exit(1)
    }
}

runMain()
//SPDX-License-Identifier: UNLICENSED" 


//pragma used by solidity compiler to validate its version
pragma solidity ^0.8.0;

//main building block of our smart contract
contract Transactions{
    //the fixed amount of token stored in an unsigned integer type variable
    uint256 transactionCount;

    //transfer event to help off-chain apps understand whats's happening in the contract
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    
    //definition of a single transaction object and its properties
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //definition of an array of different transactions
    TransferStruct[] transactions;

    //function definition with visibility set to public
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        //increment number of transactions
        transactionCount += 1; 
        //add the new  transacton to the array of transactions
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        //emit a transfer event to do the actual transfer
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    //defn of a fxn which returns an array of different structures, which it gets from memory
    function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
    }
    
    //def of a fxn which returns the count of transactions
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
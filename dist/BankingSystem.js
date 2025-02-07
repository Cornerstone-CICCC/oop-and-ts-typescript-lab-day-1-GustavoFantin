"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "Deposit";
    TransactionType["Withdraw"] = "Withdraw";
})(TransactionType || (TransactionType = {}));
var accounts = [];
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive) {
    if (isActive === void 0) { isActive = true; }
    accounts.push({
        accountNo: accountNo,
        firstname: firstname,
        lastname: lastname,
        balance: initialDeposit,
        isActive: isActive,
        transactions: []
    });
    return accounts;
}
function processTransaction(accountNo, amount, transactionType) {
    var findAcc = accounts.filter(function (acc) { return acc.accountNo === accountNo; });
    var account = findAcc[0];
    var transaction = {
        accountNo: accountNo,
        amount: amount,
        type: transactionType
    };
    if (transactionType === TransactionType.Deposit) {
        account.balance += amount;
        console.log("".concat(amount, " deposited into account number ").concat(accountNo));
    }
    else if (transactionType === TransactionType.Withdraw) {
        if (account.balance < amount) {
            console.error('Insufficient funds for withdrawal');
        }
        else {
            account.balance -= amount;
            console.log("".concat(amount, " withdrawn from account number ").concat(accountNo));
        }
    }
    account.transactions.push(transaction);
}
function getBalance(accountNo) {
    var findAcc = accounts.filter(function (acc) { return acc.accountNo === accountNo; });
    var account = findAcc[0];
    console.log(account.balance);
}
function getTransactionHistory(accountNo) {
    var findAcc = accounts.filter(function (acc) { return acc.accountNo === accountNo; });
    var account = findAcc[0];
    return account.transactions;
}
function checkActiveStatus(accountNo) {
    var findAcc = accounts.filter(function (acc) { return acc.accountNo === accountNo; });
    var account = findAcc[0];
    return account.isActive;
}
function closeAccount(accountNo) {
    var findAcc = accounts.filter(function (acc) { return acc.accountNo === accountNo; });
    var account = findAcc[0];
    var index = accounts.findIndex(function (acc) { return acc.accountNo === accountNo; });
    if (index !== -1) {
        accounts.splice(index, 1);
        return "Account number ".concat(accountNo, " closed");
    }
}
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"

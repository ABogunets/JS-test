// *Example 4 from lecture
// Write a script to control a private cabinet of internet bank.
// This is an object - account - inside of which you have to create methods to work with balance and transactions history.

// * There are only two types of transactions.
// * It's possible to deposit:  to deposit money into the account, to withdraw money from the account.
const transactionTypes = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
// Each transaction is an object with propterties: id, type and amount.
const account = {
  // current balance
  balance: 0,

  // transactions history
  transactions: [],

  // Method creates and returns an object of transaction.
  // Gets sum and type of transaction
  createTransaction(amount, type) {
    // 1. create an object of transaction with fields - id, amount, type
    // 2. take field id as length of transactions array
    return {
      id: this.transactions.length,
      amount,
      type,
    }
  },

  // Method responsible for adding a sum to the balance.
  // Method receives a sum of transaction.
  // Calls -createTransaction- to create an object of transaction
  // then adds it to the transaction history
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, transactionTypes.DEPOSIT);
    this.transactions.push(transaction);

  },

  // Method responsible for getting a sum from the balance.
  // Method receives a sum of transaction.
  // Calls -createTransaction- to create an object of transaction
  // then adds it to the transaction history

  // if -amount- is more then current balance, output a message:
  // "Withdrawal of this sum is impossible,not enough money on the balance"
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Withdrawal of this sum is impossible, not enough money on the balance');
      return false;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, transactionTypes.WITHDRAW);
    this.transactions.push(transaction);
  },

  // Method returning current balance
  getBalance() {
    return this.balance;
  },

  // Method that searches and returns object of transaction by id.
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },
  
  // Method returns amount of money of defined type of transaction from the whole transaction history.
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
account.withdraw(500);
account.deposit(1000);

account.withdraw(100);
account.withdraw(200);
account.withdraw(300);

console.log(account.getBalance());

console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(transactionTypes.WITHDRAW));
console.log(account.getTransactionTotal(transactionTypes.DEPOSIT));

console.log(account);

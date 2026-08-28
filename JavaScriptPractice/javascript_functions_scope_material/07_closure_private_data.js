// Closure for Private State

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log(account.getBalance());

account.deposit(500);

console.log(account.getBalance());

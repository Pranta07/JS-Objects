const person1 = {
    name: "person1",
    balance: 5000,
    deposit: function (amount) {
        this.balance += amount;
        return this.balance;
    },
    withdraw: function (amount) {
        this.balance -= amount;
        return this.balance;
    },
};

// deposit
let curBalance = person1.deposit(100);
console.log(curBalance);
curBalance = person1.deposit(1000);
console.log(curBalance);

// withdraw
curBalance = person1.withdraw(2000);
console.log(curBalance);
curBalance = person1.withdraw(3000);
console.log(curBalance);

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

const person2 = {
    name: "abul",
    age: 40,
    balance: 100,
};

const person3 = {
    name: "babul",
    age: 30,
    balance: 500,
};

// console.log(person1.deposit.bind(person2)); // function
// person1 er deposit function ta k person2 obj er 7a bind kore function ta dbe
const deposit2 = person1.deposit.bind(person2);
deposit2(100);
// person2.deposit(); //will not work
console.log(person2);

const deposit3 = person1.deposit.bind(person3);
deposit3(500);
console.log(person3);

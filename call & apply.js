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
// 1.call
//direct call krbe function ta k
//parameter gula comma separated akare dite hbe
person1.deposit.call(person2, 500);
console.log(person2);

person1.deposit.call(person3, 500);
console.log(person3);

// 2.apply
//direct call krbe function ta k
//parameter gula array akare dite hbe
person1.deposit.apply(person2, [500]);
console.log(person2);

person1.deposit.apply(person3, [500]);
console.log(person3);

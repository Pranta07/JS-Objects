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

//returns an array with all keys
const keys = Object.keys(person1);
console.log(keys);

//returns an array with all values
const values = Object.values(person1);
console.log(values);

//returns an array with all key-value pairs
const obj = Object.entries(person1);
console.log(obj);

//delete a property of a object
delete person1.name;
console.log(person1);

//seal => kono ntun property add or existing property delete korte parbe na
//but kono akta existing property value chaile update kra jbe
Object.seal(person1);
person1.name = "ntun_nam"; //add hbe na
delete person1.balance; //delete o hbe na
person1.balance = 10000; //but kono akta property value chaile update kra jbe
console.log(person1);

// feeze => nothing can do
Object.freeze(person1);
person1.name = "ntun_nam"; //add hbe na
delete person1.balance; //delete o hbe na
person1.balance = 20000; //update o kra jbe na
console.log(person1);

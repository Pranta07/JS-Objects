//1. using object literal
const person = {
    name: "Pranta",
    age: 23,
    isGraduated: false,
    favwork: ["CP", "Web Devoloping"],
};
//console.log(person);

//2. using Object Constructor
const briti = new Object();
//console.log(briti); //empty object

// 3.
//onno akta object er property inherit korte pare
// const ntun = Object.create(null); //obejct of null prototype
const ntun = Object.create(person); //here, person object er shob property inherit korbe
console.log(ntun.name, ntun.isGraduated);

// 4. using class #syntactical sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const ami = new People("Pranta", 23);
console.log(ami);
const tumi = new People("Briti", 23);
console.log(tumi);

// 5. using function
function post(details) {
    this.details = details;
}
const post1 = new post("bsjb ssiushnks sbs");
console.log(post1);

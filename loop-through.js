const person = {
    name: "Pranta",
    age: 23,
    isGraduated: false,
    favwork: ["CP", "Web Devoloping"],
};

//using for in
for (const prop in person) {
    console.log(prop, person[prop]);
}

//using for of
const keys = Object.keys(person);
for (const key of keys) {
    console.log(key, person[key]);
}

//using entries
const entries = Object.entries(person);
for (const [key, value] of entries) {
    // console.log(entry);
    console.log(key, value);
}

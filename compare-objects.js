const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
//equality operator will not work
//because referential integrity check kore
if (first === second) {
    console.log("both are same");
} else {
    console.log("not same");
}

// 1. strinigify the object
if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log("both are same");
} else {
    console.log("not same");
}

// 2. loop through using keys
if (Object.keys(first).length === Object.keys(second).length) {
    const isSame = true;
    for (const key in first) {
        if (first[key] !== second[key]) {
            isSame = false;
        }
    }
    if (isSame) console.log("both are same");
    else console.log("not same");
} else {
    console.log("not same");
}

const third = first; //same reference a bjhai
if (first === third) {
    console.log("both are same");
} else {
    console.log("not same");
}

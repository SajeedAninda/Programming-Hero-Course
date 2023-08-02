let details = {
    name: "Aninda",
    age: 23,
    height: 5.8,
    weight: 78,
    study: "BSC Completed",
    subject: "Computer Science"
}

let keyArray = Object.keys(details);
// console.log(keyArray);
let valArray = Object.values(details);
// console.log(valArray);

// console.log(details.age);
// console.log(details["height"]);
let storedValue = "subject";
// console.log(details[storedValue]);
details[storedValue] = "CSE";
console.log(details);

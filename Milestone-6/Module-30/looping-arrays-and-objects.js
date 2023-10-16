const newObj = {
    name: "Aninda",
    age: 23,
    siblings: 3,
    education: "Bsc",
    employed: false
}

const newArray = ["Aninda", "Anik", "Romel", "Osi", "Sami", "Ahnaf", "Zidan"]

// for (let friend of newArray) {
//     console.log(friend);
// }

for (let keys in newObj) {
    let values = newObj[keys];
    console.log(values);
}
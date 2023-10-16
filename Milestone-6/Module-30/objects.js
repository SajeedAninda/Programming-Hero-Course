const newObj = {
    name: "Aninda",
    age: 23,
    siblings: 3,
    education: "Bsc",
    employed: false
}

delete newObj.employed;
console.log(Object.entries(newObj));
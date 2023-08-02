let details = {
    name: "Aninda",
    age: 23,
    height: 5.8,
    weight: 78,
    study: "BSC Completed",
    subject: "Computer Science"
}
let objProperties = Object.keys(details);
// console.log(objProperties);
for (i = 0; i < objProperties.length; i++) {
    // console.log(objProperties[i]);
}

let objValues = Object.values(details);
for (let i = 0; i < objValues.length; i++) {
    // console.log(objValues[i]);
}

for (let propertyName in details) {
    let propertyValue = details[propertyName];
    console.log(propertyName, ":", propertyValue);

}
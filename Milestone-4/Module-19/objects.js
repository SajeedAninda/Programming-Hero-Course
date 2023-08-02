let details = {
    name: "Aninda",
    age: 23,
    height: 5.8,
    weight: 78,
    study: "BSC Completed",
    subject: "Computer Science"
}
console.log(details);

function BMI(height, weight) {
    let BMIfind = weight / (height * height);
    return BMIfind;
}
details.weight = 70;

let foundBMI = BMI(details.height, details.weight);
console.log(foundBMI);
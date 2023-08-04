let fullName = "Sajeed Enayet Aninda";
let loweredFullName = fullName.toLowerCase();
let searchString = "aninda";
let loweredSearchString = searchString.toLowerCase();
let ifExist = loweredFullName.includes(loweredSearchString);
// console.log(ifExist);

let input = "aninda"
if (loweredFullName.indexOf(input) !== -1) {
    // console.log("The string exists")
}
else {
    // console.log("The string does not exists");
}

console.log(loweredFullName.startsWith("sajeed"));
console.log(loweredFullName.endsWith("aninda"));
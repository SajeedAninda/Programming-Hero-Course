// function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr = newStr + str[i];
//     }
//     return newStr;
// }

// let input = reverseString("Hello");
// console.log(input);

function anotherReverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}
console.log(anotherReverse("I am a good Boy"));
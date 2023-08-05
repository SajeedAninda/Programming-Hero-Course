// function cake(Jim, Dela) {
//     if (Jim > Dela) {
//         return "Jim will get the cake";
//     }
//     else {
//         return "Dela will get the cake"
//     }
// }

// let result = cake(84, 75);
// console.log(result);
// let result2 = cake(69, 97);
// console.log(result2);

function cakeAgain(x, y, z) {
    if (x > y && x > z) {
        return "Jim will get the cake";
    }
    else if (y > x && y > z) {
        return "Dela will get the cake"
    }
    else {
        return "Chinku will get the cake"
    }
}
let result = cakeAgain(84, 99, 77);
console.log(result);

let result2 = cakeAgain(69, 97, 99);
console.log(result2);

let result3 = cakeAgain(99, 97, 98);
console.log(result3);
// function max(x, y, z) {
//     let largestNum = Math.max(x, y, z);
//     return largestNum;
// }
// console.log(max(86, 41, 78));

// function min(a, b, c) {
//     let smallest = Math.min(a, b, c);
//     return `The smallest number amongst ${a}, ${b} and ${c} is ${smallest}`;
// }
// console.log(min(34, 11, 66));

function max(a, b, c, d, e) {
    let largest = Math.max(a, b, c, d, e);
    if (largest == a) {
        return `${a} is the largest`;
    }
    else if (largest == b) {
        return `${b} is the largest`;
    }
    else if (largest == c) {
        return `${c} is the largest`;
    }
    else if (largest == d) {
        return `${d} is the largest`;
    }
    else {
        return `${e} is the largest`;
    }
}

console.log(max(84, 55, 77, 11, 34));

// FINDING SUM OF NUMBERS FROM 1-7
function sumOfSeven(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}
let numberArrays = [1, 2, 3, 4, 5, 6, 7];
let finalSum = sumOfSeven(numberArrays);
// console.log(finalSum);


// MULTIPLYING NUMBERS FROM 1-7
function multiplyNums(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
    }
    return sum;
}

let multipliedSum = multiplyNums(7);
// console.log(multipliedSum);

// FACTORIAL FOR NUMBER 7

// function factorial(number) {
//     for (let i = number-1; i >= 1; i--) {
//         number = number * i;
//     }
//     console.log(number);
// }
// factorial(7);
// factorial(3);
// factorial(13);

function factorial(number){
    let result=1;
    for(let i=number;i>=1;i--){
        result=result*i;
    }
    console.log(result);
}

factorial(7);
factorial(3);
factorial(13);
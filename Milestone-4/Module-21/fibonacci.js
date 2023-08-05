// function fibonacci(arr) {
//     let newArr = [];
//     for (let i = 1; i < arr.length; i++) {
//         newArr.push(arr[i] + arr[i - 1]);
//     }
//     return newArr;
// }
// console.log(fibonacci([0,1]));

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...]
// function fibonacci(num) {
//     for (let i = 2; i <= 30; i++) {
//         num[i] = num[i - 1] + num[i - 2];
//     }
//     return num;
// }
// console.log(fibonacci([0, 1]));

// Return fibonacci sequence for a certain Length 
function fibonacci(length) {
    let fibo = [0, 1];
    for (let i = 2; i <= length; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacci(15));
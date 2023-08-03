// FINDING THE SUM OF AN ARRAY 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);


// DOING IN FUNCTION 
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
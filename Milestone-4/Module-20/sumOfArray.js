// FINDING THE SUM OF AN ARRAY 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
// console.log(sum);


// DOING IN FUNCTION 
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// FIND ODD SUMS OF AN ARRAY 

function oddSums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(oddSums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(oddSums([12, 2, 32, 44, 56, 66, 78, 82, 94, 100]));
console.log(oddSums([5, 7, 8, 10, 45, 30]));
console.log(oddSums([12, 65, 45, 78, 32, 45, 91]));

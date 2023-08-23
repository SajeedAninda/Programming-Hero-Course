// let nums = Math.max(1, 2, 3, 44, 5, 6, 8, 9);
// console.log(nums);

// let arr=[1, 2, 3, 44, 5, 6, 8, 9];
// console.log(Math.max(...arr));
// let middleNums=[4,5,6]
// let arr=[1,2,3,...middleNums,7,8,9];
// console.log(arr);

let addNumbers = (a,b,c) =>{
    let add=a+b+c;
    return add;
}
let arr=[1,2,3];
console.log(addNumbers(...arr));
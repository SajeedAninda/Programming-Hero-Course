// // let multiply = (a, b, c) => a * b * c;
// // console.log(multiply(1, 2, 3));

// let multiply=(a,b,c)=>{
//     let threeMultipliers=a*b*c;
//     return threeMultipliers;
// }
// console.log(multiply(1, 2, 3));
// console.log(`I am a Web Developer.
// I like to code.
// I like to eat Biriyani.`)
// let value=(a,b=2)=>{
//     let sum=a+b;
//     return sum;
// }

// console.log(value(6));

// let isEven=(arr)=>{
//     let newArr=[];
//     for(let friend of arr){
//         if(friend.length%2===0){
//             newArr.push(friend);
//         }
//     }
//     return newArr;
// }
// let arguArr= ["Aninda", "Anik", "Romel", "Osi", "Sami", "Ahnaf", "Zidan"]
// console.log(isEven(arguArr))

// let numbers = (arr) => {
//     let sum = 0;
//     let average;
//     for (nums of arr) {
//         sum = sum + (nums*nums);
//     }
//     average = sum / arr.length;
//     return average;
// }

// console.log(numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

let combine = (arr1, arr2) => {
    let combinedArr = [...arr1, ...arr2];
    let combinedNums=[...combinedArr];
    return Math.max(combinedNums);
}

console.log(combine([1, 2, 3], [4, 5, 6]));
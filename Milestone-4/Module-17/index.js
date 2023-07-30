let newArray = [54, 60, 12, 42, 61, 91, 11, 40];
// console.log(newArray);
// console.log(newArray.length);
// console.log(newArray[7]);
// console.log(newArray[5]);

// newArray[2] = 82;
// console.log(newArray);
// // let element = newArray[4];
// // console.log(element);
// newArray[4] = 91;
// console.log(newArray);
// let element = newArray[4];
// console.log(element);
let indexed = newArray.indexOf(91);
newArray[indexed] = 1001;
console.log(newArray);
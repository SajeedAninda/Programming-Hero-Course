// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 3));

let arr = [1, 2, 3, 4, 5, 44, 1, 5, 1, 44, 51, 35, 1];
// let sliced = arr.slice(5, 10);
// console.log(sliced);

let removed = arr.splice(5, 5);
// console.log(arr);
// console.log(removed);
let elements = [1, 2, 3, 4, 7];
elements.splice(4, 0, 5, 6);
console.log(elements); 
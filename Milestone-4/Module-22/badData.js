function badData(arr) {
    let badDataArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badDataArr.push(arr[i]);
        }
    }
    return badDataArr.length;
}
let givenArr = [1, 2, 5];
let givenArr2 = [2, -5, -7, -13];
let givenArr3 = [-4, -9, -5, -33, -55];
console.log(badData(givenArr));
console.log(badData(givenArr2));
console.log(badData(givenArr3));
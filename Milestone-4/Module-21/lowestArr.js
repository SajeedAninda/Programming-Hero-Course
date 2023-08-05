function lowestArr(arr) {
    let smallArr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallArr) {
            smallArr = arr[i];
        }
    }
    return smallArr;
}

console.log(lowestArr([157, 201, 134, 65, 11, 110, 188]));
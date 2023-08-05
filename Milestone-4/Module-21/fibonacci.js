function fibonacci(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + arr[i - 1]);
    }
    return newArr;
}
console.log(fibonacci([0,1]));
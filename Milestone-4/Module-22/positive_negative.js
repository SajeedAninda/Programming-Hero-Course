function positive_negative(number) {
    let newArr = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            newArr.push(number[i]);
        }
        else {
            break;
        }
    }
    return newArr;
}

let inputArr = [3, 5, 61, 34, 5, -15, 44, 90, -86, 13, 42];
console.log(positive_negative(inputArr));
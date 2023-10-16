function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please Input a Number";
    }
    else {
        let cube = number * number * number;
        return cube;
    }
}



function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please Input a Valid String";
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
}



function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return "Invalid Input";
        }
        else {
            if (arr[0] === arr[1]) {
                return "equal";
            }
            else if (arr[0] < arr[i]) {
                let temp = arr[0];
                arr[0] = arr[1];
                arr[1] = temp;
            }
        }
    }
    return arr;
}



function findAddress(obj) {
    let firstValue = obj.street || "__";
    let secondValue = obj.house || "__";
    let thirdValue = obj.society || "__";
    return firstValue + "," + secondValue + "," + thirdValue;
}


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "You have inputted an empty array"
    }
    else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];
        }
        if (sum > totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}

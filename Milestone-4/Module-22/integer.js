function isInteger(number) {
    if (typeof number !== "number") {
        return "Please Input a Valid Number"
    }
    else {
        if (number > 1) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(isInteger(5));
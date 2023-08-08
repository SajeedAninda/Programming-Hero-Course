function isLgSeven(number) {
    if (typeof number !== "number") {
        return "Please input a valid number";
    }
    else {
        let diff = number - 7;
        if (diff < 7) {
            return diff;
        }
        else {
            return number * 2;
        }
    }
}
console.log(isLgSeven(15));
function mindGame(number) {
    if (typeof number !== "number" || number <= 0) {
        return "Please Input a Valid Positive Number";
    }
    else {
        number = ((((number * 3) + 10) / 2) - 5);
        return number;
    }
}

console.log(mindGame(5));

function gemsToDiamond(firstQuantity, secondQuantity, thirdQuantity) {
    if (typeof firstQuantity !== "number" || typeof secondQuantity !== "number" || typeof thirdQuantity !== "number") {
        return "Please Input a Number";
    }
    else if (firstQuantity < 0 || secondQuantity < 0 || thirdQuantity < 0) {
        return "Please Input a Valid Positive Number";
    }
    else {
        let firstDiamond = 21 * firstQuantity;
        let secondDiamond = 32 * secondQuantity;
        let thirdDiamond = 43 * thirdQuantity;
        let totalDiamond = firstDiamond + secondDiamond + thirdDiamond;
        if (totalDiamond > 2000) {
            return totalDiamond - 2000;
        }
        else{
            return totalDiamond;
        }
    }
}

console.log(gemsToDiamond(20, 200, 50));
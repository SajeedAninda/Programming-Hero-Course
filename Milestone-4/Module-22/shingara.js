function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity) {
    let totalSingaraPrice = 7 * singaraQuantity;
    let totalSomucaPrice = 10 * somucaQuantity;
    let totalJilapiPrice = 15 * jilapiQuantity;
    let totalCost = totalSingaraPrice + totalSomucaPrice + totalJilapiPrice;
    return totalCost;
}

console.log(pandaCost(1,2,1));
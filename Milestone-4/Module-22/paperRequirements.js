function paperRequirements(firstQuantity, secondQuantity, thirdQuantity) {
    let firstBookPages = firstQuantity * 100;
    let secondBookPages = secondQuantity * 200;
    let thirdBookPages = thirdQuantity * 300;
    let totalPages = (firstBookPages + secondBookPages + thirdBookPages);
    return totalPages;
}

let totalRequiredPages = paperRequirements(3, 2, 1);
console.log(totalRequiredPages);
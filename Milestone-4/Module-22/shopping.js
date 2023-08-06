// // TOTAL SHOPPING COST 
// function shoppingCost(products) {
//     let totalShoppingPrice = 0;
//     for (let i = 0; i < products.length; i++) {
//         totalShoppingPrice = totalShoppingPrice + products[i].price;
//     }
//     return totalShoppingPrice;
// }
// // HIGHEST COST OF PRODUCT 
// function highestPrice(products) {
//     let highest = products[0];
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price > highest.price) {
//             highest = products[i];
//         }
//     }
//     return "The product with the highest price is " + highest.name + ":" + highest.price + " Taka"
// }
// // LOWEST COST OF PRODUCT 
// function lowestCost(product) {
//     let lowestProduct = product[0];
//     for (let i = 0; i < product.length; i++) {
//         if (product[i].price < lowestProduct.price) {
//             lowestProduct = product[i];
//         }
//     }
//     return "The product with the lowest price is " + lowestProduct.name + ":" + lowestProduct.price + " Taka"
// }



// let finalPrice = shoppingCost(shoppingCart);
// console.log(finalPrice);
// console.log(highestPrice(shoppingCart));
// console.log(lowestCost(shoppingCart));

let shoppingCart =
    [
        { name: "Shoe", price: 1200 },
        { name: "Shirt", price: 2200 },
        { name: "Pant", price: 3700 },
        { name: "Belt", price: 600 },
        { name: "Sunglass", price: 400 },
        { name: "Panjabi", price: 4000 },
        { name: "Phone", price: 26000 }
    ]

// A SINGLE FUNCTION THAT WILL FIND THE TOTAL COST OF ALL PRODUCTS, THE HIGHEST COSTED PRODUCT, THE LOWEST COSTED PRODUCT, AND THE AVERAGE PRICE OF PRODUCT 
function everything(products) {
    let sumOfProduct = 0;
    for (let i = 0; i < products.length; i++) {
        sumOfProduct = sumOfProduct + products[i].price;
    }
    let highest = products[0];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > highest.price) {
            highest = products[i];
        }
    }
    let lowest = products[0];
    for (let i = 0; i < products.length; i++) {
        if (lowest.price > products[i].price) {
            lowest = products[i];
        }
    }
    let average = Math.round(sumOfProduct / products.length);
    return "The Total Price of Everything is: " + sumOfProduct + " Taka. \nThe Product with the highest Price is: " + highest.name + "-" + highest.price + " Taka. \nThe Product with the Lowest Cost is: " + lowest.name + "-" + lowest.price + " Taka. \nThe Average cost of all products is: " + average + " Taka";

}
console.log(everything(shoppingCart));
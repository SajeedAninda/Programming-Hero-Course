let fruits = ["Apple", "Banana", "Orange"];
let indexed = fruits.indexOf("Banana");
console.log(indexed);
fruits[indexed] = "Mango";
console.log(fruits);

fruits.pop();
fruits.push("Watermelon");
console.log(fruits);
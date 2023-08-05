// function tallest(arr) {
//     let mostTall = Math.max(...arr);
//     return mostTall;
// }

// console.log(tallest([157, 134, 188])); // Output: 188
// console.log(tallest([167, 190, 120, 165, 137, 110])); // Output: 190

function tallest(arr) {
    let tallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > tallest) {
            tallest = arr[i];
        }
    }
    return tallest;
}

console.log(tallest([157, 201, 134, 188]));
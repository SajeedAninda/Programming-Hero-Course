// // // // // // 1. Display ajke amar mon bhalo nei for 39 times 
// // // // // for(i=1;i<=39;i++){
// // // // //     console.log(i+". Ajke amar mon bhalo nei.")
// // // // // }


// // // // // 2. Display Numbers Between 58 to 98 
// // // // for (let i = 58; i <= 98; i++) {
// // // //     console.log(i);
// // // // }


// // // // 3. Show All Even Numbers from 412 to 456 
// // // for (i = 412; i <= 456; i++) {
// // //     if (i % 2 == 0) {
// // //         console.log(i);
// // //     }
// // // }


// // // 4. Show All ODD Numbers between 581 to 623
// // for (i = 581; i <= 623; i++) {
// //     if (i % 2 == 1) {
// //         console.log(i);
// //     }
// // }

// // 5. Difference between while loop and for loop 
// // The main difference between a while loop and a for loop in JavaScript lies in their syntax and usage, though they are both used for repetitive execution of a block of code.
// // While Loop- 
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++
// }
// // For Loop 
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// // BOTH OF THESE PRINTS THE SAME RESULT BUT HAVE SLIGHTLY DIFFERENT SYNTAXES

// 6. Declare an array for all the topics that you have learned in javascript and output them.
// let learnt = ["Variables", "Data Types", "Operators", "Comparators", "Conditionals", "Loops", "And SO ON"];
// for (i = 0; i <= learnt.length; i++) {
//     console.log(learnt[i]);
// }

// 7. Create an array with all mobile phone brands. Display them using while loop 
// let phoneBrands = ["Apple", "Samsung", "Xiaomi", "Realme", "Oneplus", "Pixel", "Sony", "Huawei", "Vivo", "Oppo", "Honor", "Nokia", "Techno", "Zte", "And So On"]
// let i = 0;
// while (i < phoneBrands.length) {
//     console.log(phoneBrands[i]);
//     i++;
// }

// 8. Run a loop from 30 to 86. This Loop will stop if the values get higher than 44
// for (i = 30; i <= 86; i++) {
//     if (i > 44) {
//         break;
//     }
//     console.log(i);
// }

// 9. Write the prices of the books that you HashChangeEvent. Display the prices if price the price is less than 200.
// let price = [180, 480, 133, 90, 60, 600, 120, 203, 198, 177, 900, 100, 122, 1456, 135, 189, 30, 240, 580, 40];
// for (i = 0; i <= price.length; i++) {
//     if (price[i] < 200) {
//         console.log(price[i]);
//     }
// }

// 10. Say you have x amount of money, if you have more than 80,000 you will buy a gaming desktop if you have less than 80 but more than 60k then you will buy a gaming laptop and so on
// let budget = 45000;
// if (budget >= 80000) {
//     console.log("I will buy a gaming Desktop");
// }
// else if (budget >= 60000) {
//     console.log("I will buy a gaming laptop");
// }
// else if (budget >= 40000) {
//     console.log("I will buy a lenovo yoga");
// }
// else if (budget >= 20000) {
//     console.log("I will buy an used Laptop");
// }
// else {
//     console.log("I will buy a mobile phone");
// }

// 11. Declare a variable 
// let x;
// x = 5;
// console.log(x);

// 12. How can you find out type of a variable? 
// let x = 5;
// let y = "Aninda";
// let z = true;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Challange -1 
// let myWork = ["১) রাত ৮ টা বাজে মডিউল আনলক করো", "২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "৩) ভিডিও দেখতে দেখতে নোটস নাও", "4) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", "৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো"];

// for (let i = 0; i < myWork.length; i++) {
//     console.log(myWork[i]);
// }

// let i = myWork.length;
// while (i >= 0) {
//     console.log(myWork[i]);
//     i--;
// }

// for (let i = myWork.length; i >= 0; i--) {
//     console.log(myWork[i]);
// }
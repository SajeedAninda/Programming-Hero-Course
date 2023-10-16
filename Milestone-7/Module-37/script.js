// // {var number=89;

// // }
// // {
// //     let newArr=[1,2,3,4,5,6];
// // }
// // const name="Aninda";
// // console.log(newArr);

// // Problem 1: Grade Calculator

// // Write a JavaScript program that calculates the letter grade for a given numeric score based on the following grading scale:

// // let score=65;
// // if(score>90){
// //     console.log("A");
// // }
// // else if(score>80 && score<90){
// //     console.log("B");
// // }
// // else if(score>70 && score<80){
// //     console.log("C");
// // }
// // else if(score>60 && score<70){
// //     console.log("D");
// // }
// // else if(score>50 && score<960){
// //     console.log("E");
// // }

// // for(let i=0; i<=10; i++){
// //     console.log(i);
// // }

// // let sum = (a, b, c) => {
// //     summed=a+b+c;
// //     return summed;
// // };

// // let summation = sum(2, 3, 4);
// // console.log(summation);

// // const person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     age: 30,
// //     email: "john.doe@example.com",
// //     isStudent: false,
// // };

// // // // console.log(person.firstName,person.email);
// // // // console.log(person["age"]);
// // // let findEmail = "email";
// // // console.log(person[findEmail]);

// // console.log(`Hi my name is ${person.firstName} ${person.lastName}. I am ${person.age} years old. My Email is: ${person.email}. Please Write it down`)

// // let firstArray = [10, 20, 30, 40, 50];
// // let secondArray = [...firstArray];
// // secondArray.push(...firstArray);
// // let combinedArr=[...firstArray,...secondArray];
// // console.log(combinedArr);
// // let newArr=[...firstArray,60,70,80];
// // console.log(newArr);

// const laptops = [
//     {
//         name: "Dell XPS 13",
//         brand: "Dell",
//         price: 1199.99,
//         model: "XPS 13",
//         color: "Silver",
//         screenSize: "13.4 inches",
//     },
//     {
//         name: "MacBook Air",
//         brand: "Apple",
//         price: 999.99,
//         model: "Air",
//         color: "Gold",
//         screenSize: "13.3 inches",
//     },
//     {
//         name: "HP Spectre x360",
//         brand: "HP",
//         price: 1399.99,
//         model: "Spectre x360",
//         color: "Dark Ash Silver",
//         screenSize: "13.3 inches",
//     },
//     {
//         name: "Lenovo ThinkPad X1 Carbon",
//         brand: "Lenovo",
//         price: 1499.99,
//         model: "ThinkPad X1 Carbon",
//         color: "Black",
//         screenSize: "14 inches",
//     },
//     {
//         name: "Asus ROG Zephyrus G14",
//         brand: "Asus",
//         price: 1499.99,
//         model: "ROG Zephyrus G14",
//         color: "Moonlight White",
//         screenSize: "14 inches",
//     },
//     {
//         name: "Microsoft Surface Laptop 4",
//         brand: "Microsoft",
//         price: 1299.99,
//         model: "Surface Laptop 4",
//         color: "Platinum",
//         screenSize: "13.5 inches",
//     },
//     {
//         name: "Acer Predator Helios 300",
//         brand: "Acer",
//         price: 1199.99,
//         model: "Predator Helios 300",
//         color: "Abyssal Black",
//         screenSize: "15.6 inches",
//     },
//     {
//         name: "Samsung Galaxy Book Pro",
//         brand: "Samsung",
//         price: 1099.99,
//         model: "Galaxy Book Pro",
//         color: "Mystic Silver",
//         screenSize: "15.6 inches",
//     },
//     {
//         name: "Razer Blade 15",
//         brand: "Razer",
//         price: 1799.99,
//         model: "Blade 15",
//         color: "Mercury White",
//         screenSize: "15.6 inches",
//     },
//     {
//         name: "LG Gram 17",
//         brand: "LG",
//         price: 1499.99,
//         model: "Gram 17",
//         color: "Dark Silver",
//         screenSize: "17 inches",
//     },
// ];

// // let laptopBrands = laptops.map(brands => `${brands.brand}:${brands.model}`);
// // console.log(laptopBrands);

// let prices=laptops.filter(price=>price.price<1100);
// let affordableBrands=prices.map(brnd=>brnd.brand);
// console.log(affordableBrands);

// শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন কিভাবে লিখে। উদাহরণ হিসাবে তুমি এখন একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।

// let zeroPara = () => 9;
// console.log(zeroPara());

// এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।

// let singlePara = (num) =>  num*12;
// console.log(singlePara(10));

// দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।

// let twoPara = (num1,num2) => (num1+num2)/4;
// console.log(twoPara(5,7));

// একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
// let multiplePara = (num1, num2, num3) => {
//     return (num1 + 5) * (num2 + 5) * (num3 + 5);
// }

// console.log(multiplePara(3, 6, 9));

//  সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
// array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     email: "john.doe@example.com",
// };

// let { lastName } = person;
// // console.log(lastName);
// let newArr = [1, 2, 3, 4, 5, 6, 7];
// let [nuevo, balance]  = newArr;
// console.log(balance);

// অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

// let newArr = [1, 2, 3, 4, 5, 6, 7];
// let doubledArr=newArr.map(double=>double*2);
// console.log(doubledArr);

// if (number >= 0) {
//     console.log("Number is positive");
//   } else {
//     console.log("Number is negative");
//   }

// let number=-5;
// number >= 0 ? console.log("Number is positive") : console.log("Number is negative");
// const array = [];
// array.forEach(element => {
//   console.log(element);
// });

// let name="Hero";
// let age=34;
// let person ={name,age};
// console.log(person);

let person=null;
console.log(person?person:"person null");
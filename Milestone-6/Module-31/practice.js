// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }

// console.log(data.Sophia.study[1].secondary[1]);


// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }

// console.log(`${students[2222].address.city}, ${students[3333].name}`);

// let data2 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory)
// let oddArr = [1, 3, 5, 7, 9];
// let evenArr = [];
// for (let odd of oddArr) {
//     let evened = odd + 1;
//     evenArr.push(evened);
// }
// console.log(evenArr);

// let evenFunc = (n) => n + 1;
// let evenArr = oddArr.map(n=>n+1);
// console.log(evenArr);

// let arr = [33, 50, 79, 78, 90, 101, 30];
// let filtered = arr.filter(n => n % 10 === 0);
// console.log(filtered);

// let finder = arr.find(n => n % 10 === 0);
// console.log(finder);

const employees = [
    {
        name: "John Doe",
        age: 30,
        position: "Senior"
    },
    {
        name: "Jane Doe",
        age: 25,
        position: "Junior"
    },
    {
        name: "Peter Smith",
        age: 40,
        position: "Senior"
    },
    {
        name: "Mary Johnson",
        age: 35,
        position: "Junior"
    },
    {
        name: "David Williams",
        age: 20,
        position: "Junior"
    }
];

// let senior = employees.filter(n => n.position === "Senior");
// console.log(senior);

// let ageSum = 0;
// for (let age of employees) {
//     ageSum = ageSum + (age.age);
// }
// console.log(ageSum);

let ageSum = employees.reduce((accumulator, employee) => {
    accumulator += employee.age;
    return accumulator;
}, 0);

console.log(ageSum);

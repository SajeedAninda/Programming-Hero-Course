function findLeapYear(year) {
    leapArr = [];
    for (let i = 0; i < year.length; i++) {
        if (year[i] % 4 == 0) {
            if (year[i] % 100 == 0) {
                if (year[i] % 400 == 0) {
                    leapArr.push(year[i]);
                }
            }
            else {
                leapArr.push(year[i]);
            }
        }

    }
    return leapArr;
}

let givenArr = [1700, 1800, 1900, 2016, 2018, 2020, 2023, 2024, 2025, 2028, 2030];
let checkLeapYear = findLeapYear(givenArr);
console.log(checkLeapYear); //Returns [ 2016, 2020, 2024, 2028 ]



// ANOTHER VERSION OF THE SIMILAR PROGRAM WITHOUT NESTED LOOPS
function findLeapYear(years) {
    const leapArr = [];

    for (let i = 0; i < years.length; i++) {
        const year = years[i];

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapArr.push(year);
        }
    }

    return leapArr;
}

const givenArr = [1700, 1800, 1900, 2016, 2018, 2020, 2023, 2024, 2025, 2028, 2030];
const checkLeapYear = findLeapYear(givenArr);
console.log(checkLeapYear); // Returns [ 2016, 2020, 2024, 2028 ]

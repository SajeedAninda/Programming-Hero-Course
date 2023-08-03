function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "It is a Leap Year";
            } else {
                return "It is not a Leap Year";
            }
        } else {
            return "It is a Leap Year";
        }
    } else {
        return "It is not a Leap Year";
    }
}


console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(2022));
console.log(leapYear(2023));
console.log(leapYear(2024));
console.log(leapYear(2025));

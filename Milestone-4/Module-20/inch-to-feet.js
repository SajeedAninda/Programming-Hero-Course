function inch_to_feet(input) {
    let feet = input * 0.0833;
    let fixedFett=feet.toFixed(2);
    let intFeet = parseFloat(fixedFett);
    return intFeet;
}

console.log(inch_to_feet(5));
console.log(inch_to_feet(15));
console.log(inch_to_feet(45));
console.log(inch_to_feet(84));
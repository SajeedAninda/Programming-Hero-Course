function milesTokm(miles) {
    let km = miles * 1.609344;
    let fixedKm = km.toFixed(2);
    let fixedKmNum = parseFloat(fixedKm);
    return fixedKmNum;
}
console.log(milesTokm(26));
console.log(milesTokm(100));
console.log(milesTokm(18));
function largestName(name) {
    let longest = name[0];
    for (let i = 1; i < name.length; i++) {
        if (name[i].length > longest.length) {
            longest = name[i];
        }
    }
    return longest;
}
let nameArray = ["Anik", "Aninda", "Romel", "Sami", "Osi", "Ahnaf", "Zidan", "jjnajcadja"];
let result = largestName(nameArray);
console.log(result);
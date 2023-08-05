function duplicate(names) {
    let uniqueNames = [];
    for (friendName of names) {
        if (uniqueNames.includes(friendName) === false) {
            uniqueNames.push(friendName);
        }
    }
    return uniqueNames;
}

let givenNames = ["Aninda", "Anik", "Romel", "Anik", "Sami", "Aninda", "Romel", "Zidan", "Anik", "Osi", "Sami", "Romel", "Ahnaf", "Zidan", "Aninda", "Ahnaf"];
console.log(duplicate(givenNames));
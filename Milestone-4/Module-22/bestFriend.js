function bestFriend(arr) {
    let biggestLetter = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > biggestLetter.length) {
            biggestLetter = arr[i];
        }
    }
    let smallestLetter = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (smallestLetter.length > arr[i].length) {
            smallestLetter = arr[i];
        }
    }
    return biggestLetter + "----" + smallestLetter;
}

let arrayOfFriends = ["Aninda", "Anik", "Sami", "Osi", "Zidan", "Mubasshir", "ajajjejeje", "Mostakim", "Muhaiminul", "Ahnaf", "Romel"];

console.log(bestFriend(arrayOfFriends));
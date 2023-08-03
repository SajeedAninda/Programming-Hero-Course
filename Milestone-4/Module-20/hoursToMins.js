function hoursToMins(hour) {
    let mins = 60 * hour;
    return mins;
}
let totalMins = hoursToMins(24);
console.log(totalMins);

function hoursToSeconds(hour) {
    let secs = hour * 3600;
    return secs;
}
let totalSeconds = hoursToSeconds(24);
console.log(totalSeconds);
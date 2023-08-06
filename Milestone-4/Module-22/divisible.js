function divisible() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FOOBAR");
        }
        else if (i % 3 === 0) {
            console.log("FOO");
        }
        else if (i % 5 === 0) {
            console.log("BAR");
        }
        else {
            console.log(i);
        }
    }
}
divisible();
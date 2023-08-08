function isJavaScriptFile(str) {
    if (typeof str !== "string") {
        return "Please Input a Valid File Name";
    }
    else {
        if (str.endsWith(".js")) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(isJavaScriptFile("index.js"));
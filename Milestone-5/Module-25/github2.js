document.querySelector("#input").addEventListener("keyup", function () {
    let inputField = document.querySelector("#input");
    let inputValue = inputField.value;
    let button = document.querySelector(".dltBtn");
    if (inputValue !== "Delete") {
        button.setAttribute("disabled", true);
    }
    else {
        button.removeAttribute("disabled");
    }

})
document.querySelector(".dltBtn").addEventListener("click", function () {
    document.querySelector(".info").style.visibility = "hidden";
})
document.querySelector("#input").addEventListener("keyup", function () {
    let inputField = document.querySelector("#input");
    let inputVal = inputField.value;
    let button = document.querySelector(".dltBtn");
    if (inputVal === "delete") {
        button.removeAttribute("disabled");
    }
    else {
        button.setAttribute("disabled", true);
    }

})

document.querySelector(".dltBtn").addEventListener("click", function () {
    let info = document.querySelector(".info");
    info.remove();
})
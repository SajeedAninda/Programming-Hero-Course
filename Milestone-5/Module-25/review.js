document.querySelector("#submit-btn").addEventListener("click", function () {
    let txtField = document.querySelector("#text-area");
    let txtVal = txtField.value;
    let div = document.querySelector("#review")
    let p = document.createElement("p");
    p.innerText = txtVal;
    div.append(p);
    txtField.value = "";

})
document.querySelector("#text-area").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let txtField = document.querySelector("#text-area");
        let txtVal = txtField.value;
        let div = document.querySelector("#review")
        let p = document.createElement("p");
        p.innerText = txtVal;
        div.append(p);
        txtField.value = "";
    }
})
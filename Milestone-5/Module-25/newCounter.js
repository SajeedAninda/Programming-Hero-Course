// document.querySelector("#plus-btn").addEventListener("click", function(){
//     let h1=document.querySelector("#count");
//     let value=h1.innerText;
//     intValue=parseInt(value);
//     intValue++;
//     h1.innerText=intValue;
// })

let count = 0;
document.querySelector("#plus-btn").addEventListener("click", function () {
    let h1 = document.querySelector("#count");
    h1.innerText = count++;
})
document.querySelector("#minus-btn").addEventListener("click", function () {
    let h1 = document.querySelector("#count");
    if (count > 0) {
        h1.innerText = --count;
    }
})
document.querySelector(".reset").addEventListener("click", function () {
    let h1 = document.querySelector("#count");
    count = 0;
    h1.innerText = count;
})
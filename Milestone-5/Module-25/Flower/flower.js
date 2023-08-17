totalCost = parseFloat(document.querySelector("#cost-span").innerText);
let costField = document.querySelector("#cost-span");

document.querySelector("#btn1").addEventListener("click", function () {
    let flowerCost1 = parseFloat(document.querySelector("#flower-1-cost").innerText);
    totalCost = totalCost + flowerCost1;
    costField.innerText = totalCost;
})

document.querySelector("#btn2").addEventListener("click", function () {
    let flowerCost2 = parseFloat(document.querySelector("#flower-2-cost").innerText);
    totalCost = totalCost + flowerCost2;
    costField.innerText = totalCost;
})

document.querySelector("#btn3").addEventListener("click", function () {
    let flowerCost3 = parseFloat(document.querySelector("#flower-3-cost").innerText);
    totalCost = totalCost + flowerCost3;
    costField.innerText = totalCost;
})

document.querySelector("#btn4").addEventListener("click", function () {
    let flowerCost4 = parseFloat(document.querySelector("#flower-4-cost").innerText);
    totalCost = totalCost + flowerCost4;
    costField.innerText = totalCost;
})

// DISCOUNT 
document.querySelector("#discountBtn").addEventListener("click", function () {
    let inputValue = document.querySelector("#inputField").value;
    let noDiscount = document.querySelector(".no-discount");

    if (inputValue === "aNiNda27") {
        totalCost = totalCost - ((totalCost * 30) / 100);
        costField.innerText = totalCost.toFixed(2);
    } else {
        noDiscount.innerText = "No Discount For You";
    }

    document.querySelector("#inputField").value = "";
})


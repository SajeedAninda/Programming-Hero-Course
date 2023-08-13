// INCREMENT
document.querySelector(".increment").addEventListener("click", function () {
    let valueElement = document.querySelector(".value");
    let value = valueElement.innerText;
    let intValue = parseInt(value);
    intValue++;
    valueElement.innerText = intValue;
})

// DECREMENT 
document.querySelector(".decrement").addEventListener("click", function () {
    let valueElement = document.querySelector(".value");
    let value = valueElement.innerText;
    let intValue = parseInt(value);

    if (intValue > 0) {
        intValue--; // Decrement intValue
    }

    valueElement.innerText = intValue; // Update the element's content
});

// RESET 
document.querySelector(".reset").addEventListener("click", function () {
    let valueElement = document.querySelector(".value");
    valueElement.innerText = 0;
})

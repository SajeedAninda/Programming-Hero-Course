document.querySelector(".delete").addEventListener("click", function () {
    let containerDiv = document.querySelector(".containerDiv");
    containerDiv.removeChild(containerDiv.lastElementChild);
})

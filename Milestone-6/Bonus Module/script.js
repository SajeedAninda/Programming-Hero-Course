let getInputValues = () => {
    let productName = document.querySelector("#Product-Name").value;
    let productQuantity = document.querySelector("#Product-Quantity").value;
    addValues(productName, productQuantity)
    setProductToLocalStorage(productName, productQuantity)
}

let addValues = (productName, productQuantity) => {
    let listContainer = document.querySelector(".list-container");
    let newLi = document.createElement("li");
    newLi.innerHTML = `
    Product Name: ${productName} <br>
    Product Number: ${productQuantity}
    `
    listContainer.appendChild(newLi);
}

let checkStorage = () => {
    let cart = {};
    let storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

let setProductToLocalStorage = (productName, productQuantity) => {
    let cart = checkStorage();
    cart[productName] = productQuantity;
    let cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

let showDataFromLocalStorage=()=>{
    let storedData=checkStorage();
    console.log(storedData);
}
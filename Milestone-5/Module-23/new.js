let parents = document.querySelector(".parents");
// console.log(parents);
parents.style.backgroundColor = "violet";
let secondParent = parents.nextElementSibling;
secondParent.style.backgroundColor = "violet";

let childrens = document.querySelectorAll(".childrens");
for (let child of childrens) {
    child.style.backgroundColor = "red";
}
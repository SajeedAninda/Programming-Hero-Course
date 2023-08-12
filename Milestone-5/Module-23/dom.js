let sections=document.querySelectorAll("section");
for(let section of sections){
    section.style.border="2px solid red";
    section.style.marginBottom="5px";
    section.style.borderRadius="10px";
    section.style.padding="10px";
}
let jalali=document.querySelector(".jalali-set");
// jalali.style.backgroundColor="red";
jalali.style.padding="20px";
jalali.classList.add("yellow-bg");
jalali.classList.remove("jalali-set");
console.log(jalali.getAttribute("class"));
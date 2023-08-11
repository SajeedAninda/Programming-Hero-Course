console.log("Hello From Js");
let lists = document.getElementsByTagName('li');
// console.log(lists);
for (let li of lists) {
    console.log(li.innerText);
}

let headings=document.getElementsByTagName('h1');
// console.log(headings);
for(let heading of headings){
    console.log(heading.innerText);
}
let body = document.getElementsByTagName("body")[0];
let section = document.createElement("section");
body.appendChild(section);
let firstHeading = document.createElement("h1");
firstHeading.innerText = "Things I like the most!";
section.appendChild(firstHeading);
let secondHeading = document.createElement("h3");
secondHeading.innerText = "The complete List is given";
section.appendChild(secondHeading);
firstUl = document.createElement("ul");
section.appendChild(firstUl);

firstList = document.createElement("li");
firstList.innerText = "I Like to Code";
firstUl.appendChild(firstList);

secondList = document.createElement("li");
secondList.innerText = "I Like to Eat";
firstUl.appendChild(secondList);

thirdList = document.createElement("li");
thirdList.innerText = "I Like to Sleep";
firstUl.appendChild(thirdList);

//With innerHTML

let newHeading=document.createElement("h3");
section.appendChild(newHeading);
let secondUl=document.createElement("ul");
section.appendChild(secondUl);
newHeading.innerText="My Favourite Foods"
secondUl.innerHTML=`
    <li>I like to eat Biriyani</li>
    <li>I like to eat Kebabs</li>
    <li>I like to eat Momos</li>
`
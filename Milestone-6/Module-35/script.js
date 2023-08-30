console.log(1);
console.log(2);
let num = 0;
let watch=setInterval(() => {
    console.log(++num);
    if(num===8){
        clearInterval(watch);
    }
}, 1000);

console.log(4);
console.log(5);
console.log(6);

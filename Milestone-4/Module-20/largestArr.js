function largestArr(arr){
    let largest =arr[0];
    for(let i=i;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

let givenArray = [12,56,11,45,11,118,9,10,14,56,78];
let largeArray=largestArr(givenArray);
console.log(largeArray);
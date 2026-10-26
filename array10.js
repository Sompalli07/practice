let numbers=[10,25,7,89,34,12];
let even=0;
let odd=0;
for(let number of numbers){
    if(number%2===0){
        even++;
    }else{
    odd++;
    }
}
console.log("even:",even);
console.log("odd:",odd);
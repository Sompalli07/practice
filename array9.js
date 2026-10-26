let numbers=[10,15,7,20,31];
let sum=0;
for(let number of numbers){
    if(number%2!==0){
        sum+=number;
    }
}
console.log("sum:",sum);
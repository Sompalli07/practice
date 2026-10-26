let numbers=[1,2,3,4,5];
let sum=0;
for(let number of numbers){
    if(number%2===0){
        sum+=number;
    }
}
console.log("sum:",sum);
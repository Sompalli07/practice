let numbers=[1,2,4,3,2,3,2,4,5,2];
let target=2;
let count=0;
for(let number of numbers){
    if(number===target){
        count++;
    }
}
console.log(target+"occurs",count,"times");
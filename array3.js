let numbers = [10, 23, 8, 3, 67];
let sum = numbers.reduce((total,number)=>total+number,0);
let avg = sum/numbers.length;
console.log("average:",avg);
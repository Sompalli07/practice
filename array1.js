let numbers = [10, 38, 7, 82, 9];
let largest = Math.max(...numbers);
console.log("Largest num:",largest);
numbers.sort((a,b)=>(b-a));
console.log("2nd larg num:",numbers[1]);
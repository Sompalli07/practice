let numbers = [10, 28, 9, 8, 32];
let smallest = Math.min(...numbers);
console.log("smallest no:",smallest);
numbers.sort((a,b)=>(a-b));
console.log("2nd smallest:",numbers[2]);
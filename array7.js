let names = ["Anjani","Preetika","Kavya","Reshma"];
let longest = names[0];
for(let name of names){
    if(name.length > longest.length){
        longest=name;
    }
}
console.log("Longest name:",longest);
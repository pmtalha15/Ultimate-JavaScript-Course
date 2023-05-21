// Loops Using Arrays

let num = [3,5,4,1,2,67,78];

// Classical For Loop

console.log("---For Loop---");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

// ForEach Loop
console.log("---For Each Loop---");
num.forEach((element)=>{
    console.log(element*element);
})

// Array.from - converts an object into an array
console.log("---Array.from---");
let name = "Talha";
let arr = Array.from(name);
console.log(arr);

// ForOf Loop
console.log("---For Of Loop---");
for(let i of num){
    console.log(i);
}

// ForIn Loop
console.log("---For In Loop---");
console.log("====Indexes====");
for(let i in num){
    console.log(i); // This prints the indexes of the elements of the array
}
console.log("====Values====");
for(let i in num){
    console.log(num[i]); // This prints the values of the array
}
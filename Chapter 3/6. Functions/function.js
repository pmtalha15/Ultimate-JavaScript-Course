// functions
/* Synatx
function myFunc(){
    // code to be executed
} */

let a = 1;
let b = 2;
let c = 3;

// Function with a parameter x and y
function onePlusAvg(x, y){
    console.log("Done");
    return Math.round(1 + (x+y)/2); // Math.round is used to round the value to the nearest number.
}

// Arrow function
const sum = (p,q) => {
    return p+q;
}

// Function with no parameter
const hello = () =>{
    console.log("Hello World");
}

console.log("One Plus average of "+ a + " and "+ b +" is: "+ onePlusAvg(a,b));
console.log("One Plus average of "+ b + " and "+ c +" is: "+ onePlusAvg(b,c));
console.log("One Plus average of "+ c + " and "+ a +" is: "+ onePlusAvg(c,a));
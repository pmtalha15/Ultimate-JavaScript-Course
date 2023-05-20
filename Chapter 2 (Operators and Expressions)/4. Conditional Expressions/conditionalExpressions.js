// If, If-else, else-if, nested-if

let a = "45";

a = Number.parseInt(a); // Converting String into a number

if(a>0){
    console.log("This is a valid age");
}
else{
    console.log("This is an invalid age");
}

// Ternary operators

console.log("You can", (a<18? "Not Drive" : "Drive"))
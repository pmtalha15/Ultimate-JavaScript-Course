// for of loop

// The value should be iterable

/* Syntax
for ( variable of iterable){
    code to be executed
} */

let obj = {
    Talha: 90,
    Zaid: 95,
    Ismail: 98
} // This wont work in for of loop as the object is not iterable, if this was an array or string , it would work

for (let a of "Talha"){
    console.log(a);
}
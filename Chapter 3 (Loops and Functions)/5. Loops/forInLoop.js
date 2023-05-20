// For In Loop

// Syntax 
// for(key in object){
//     code to be executed
// }

// let obj = {
//     "Talha": 90,
//     "Zaid": 95,
//     "Ismail": 98
// }

//OR

let obj = {
    Talha: 90,
    Zaid: 95,
    Ismail: 98
}

for (let a in obj){
    console.log("Marks of "+a+" are "+obj[a]);
}
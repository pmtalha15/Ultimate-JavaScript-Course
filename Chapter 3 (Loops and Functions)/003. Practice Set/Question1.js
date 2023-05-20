// Write a program to print the marks of a student in an object usinf for loop

// obj = { Talha: 90, Zaid: 95, Ismail: 100}

let obj  = { Talha: 90, Zaid: 95, Ismail: 100}

for(let i=0; i<Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i] + " : "+obj[Object.keys(obj)[i]]);
}
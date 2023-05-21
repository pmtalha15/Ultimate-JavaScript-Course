// Map, Reduce, Filter

// These are higher order array methods, it doesnot modify the original array

let arr = [45,23,21];

// Maps
console.log("----Map---");

let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value+index;
})
console.log(a);

// Filter
console.log("----Filter---");

let b = arr.filter((value)=>{
    return value < 25;
})
console.log(b);

//Reduce

console.log("----Reduce----");
let arr2 = [1,2,3,3,4,5,5];

let c = arr2.reduce((value, value1)=>{
    return value + value1;
});

console.log(c);
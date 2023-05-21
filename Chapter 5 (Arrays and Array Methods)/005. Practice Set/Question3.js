// Filter for numbers divisible by 10 from a given array

let arr = [10,21,35,40,50,65];

let a  = arr.filter((value)=>{
    return value%10 == 0;
})

console.log(a);
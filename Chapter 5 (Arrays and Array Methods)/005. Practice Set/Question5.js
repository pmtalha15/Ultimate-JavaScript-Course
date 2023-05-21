// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)

let a = [1,2,3,4,5,6];

let b = a.reduce((x1, x2)=>{
    return x1*x2;
});

console.log(b);
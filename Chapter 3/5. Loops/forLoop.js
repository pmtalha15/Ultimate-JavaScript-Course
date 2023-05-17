// For Loops

// Everytime it executes, it starts from zero, and goes till n-1

// for (let i=0; i<5; i++){
//     console.log(i);
// }

// Program to add first n natural numbers

let sum = 0;
let n = 2;
for(let i=0; i<n; i++){
    sum+= (i+1); // either i+1 or start the iteration from i=1
}

console.log("Sum of first " + n + " natural numbers is "+sum);


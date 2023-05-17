// Write a javascript program to find whether a number is divisible either by 2 and 3

let a = 17;
let b = 2;
let c = 3;

if(a%b == 0){
    console.log(a," is divisible by ", b);
}
else if(a%c == 0){
    console.log(a," is divisible by ", c);
}
else{
    console.log(a," is not divisible by both ",b," & ", c);
}
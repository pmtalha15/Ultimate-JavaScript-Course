// Keep adding numbers to the array in Q1 until zero is added to the array

let arr = [1,2,3,4,5,6];

let a;
do{
    a = prompt("Enter a number");
    a = Number.parseInt(a);
    arr.push(a);
}
while(a!=0);
console.log(arr);

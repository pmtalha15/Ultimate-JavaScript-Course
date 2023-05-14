// var vs let vs const

// 1. The var will change the value wherever it is changed, in the below case, it will print this & this

// var a = 45;
// var b = "Talha";

// {
//     var b = "this";
//     console.log(b);
// }
// console.log(b);

// 2. But if we use let, it will change the value only in the respective block, not globally, it can be updated but not redeclared.

// let a = 45;
// let b = "Talha";

// {
//     let b = "this";
//     console.log(b);
// }
// console.log(b);

// 3. const cannot be updated nor redeclared

const a = 45;
const b = "Talha";
// b = "Hi"; Cannot be changed, will throw error
{
    let b = "this";
    console.log(b);
}
console.log(b);

// Avoid using var, practice using const most of the times, use let only when you feel you want to change the value of the variable.


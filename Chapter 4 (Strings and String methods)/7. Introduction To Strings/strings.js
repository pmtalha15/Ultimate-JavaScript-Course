// Strings
let home = 'Bangalore'; // Can be enclosed in a single quote
let names = "Talha"; // Can also be enclosed in a double quote
console.log(names); // Prints name
console.log(names.length); // Gives the length of the string

// let brother = "Zaid' // not allowed

console.log(names[0]); // Prints the character of the string
console.log(names[1]); // Prints the character of the string
console.log(names[2]); // Prints the character of the string
console.log(names[3]); // Prints the character of the string
console.log(names[4]); // Prints the character of the string
// console.log(names[5]); // This will give "undefined" as the string doesnot contain 6 letters

// ------------MODERN JAVASCRIPT---------------//

//Template Literal 
// Syntax ${variable}

let brother1 = "Zaid";
let brother2 = "Ismail";

// If i want to print - My brothers are Zaid and Ismail, template literal can be used here

console.log(`My brothers are ${brother1} and ${brother2}`);

// Escape Sequence Characters

let fruit = 'Bana\'na';

console.log(fruit); // Prints Bana'na

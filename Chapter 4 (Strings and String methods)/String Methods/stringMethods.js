// String Methods (Strings are immutable)

let names = "talha";
console.log(names.length); // Prints the length of the string
let names1 = "Talha\"";
console.log(names1);
console.log(names1.length); // Prints the length of the string excluding the escape character
console.log(names.toUpperCase()); // Prints name in Uppercase
console.log(names.toLowerCase()); // Prints name in Lowercase

console.log(names.slice(2,4)); // it will print lh, because l is present in 2nd index and h is present in third index. It wont include the 4th index
console.log(names.slice(2)); // Prints string from 2nd index to last

console.log(names.replace("tal", "Pal")); // Replaces Tal with Pal

let brother = "Zaid";
console.log(names.concat(" is a big brother of ", brother)); // Joins the string to another string

let brother1 = "        Ismail          ";
console.log(brother1);// Prints        Ismail          (With spaces)
console.log(brother1.trim()); // Prints Ismail (With nospaces)

// Quick Quiz (Print the name using for loop)

for(let i=0; i<names.length; i++){
    console.log(i+1 +" -> "+names[i]);
}
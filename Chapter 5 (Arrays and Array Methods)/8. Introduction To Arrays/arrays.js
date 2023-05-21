// Arrays - Are mutable and can be changed

// Array is an object

let marks_class_12 =  [91, 82, 63 , 84, false, "Talha"];

marks_class_12[6] = 89; // You can add and remove elements and also change the values of array
marks_class_12[1] = 98;
console.log(marks_class_12[0]); // 91
console.log(marks_class_12[1]); // 82
console.log(marks_class_12[2]); // 63
console.log(marks_class_12[3]); // 84
console.log(marks_class_12[4]); // false
console.log(marks_class_12[5]); // Talha
console.log(marks_class_12[6]); // Undefined

console.log("The length of the array is "+ marks_class_12.length);
console.log(marks_class_12);

console.log(typeof marks_class_12);

// Quick quiz - Print the values of array using for loop

console.log("---Printing the array using for loop---");

for(let i=0; i<marks_class_12.length; i++){
    console.log(marks_class_12[i]);
}


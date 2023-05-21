// Array Methods

let num = [12,45,33,41,2,3,4,5,6,7,8];
let names = ["Talha", "Zaid", "Ismail"] 
console.log(num, "Type of num is: ",typeof num);

// toString converts any object to a string
console.log("----To String----");
let b = num.toString(); // b is now a string
console.log(b, "Type of b is: ",typeof b);

// Join method joins the values with a specified value
console.log("----Join----");
let c = num.join("_"); // 1_2_3_4_5_6_7_8
console.log(c);

// Pop Method updates the original array and removes the last element
console.log("----Pop----");
num.pop();
console.log(num);

// Push Method updates the original array and adds a new element
console.log("----Push----");
num.push(8);
console.log(num);

// Shift Method removes the first element and returns it
console.log("----Shift----");
num.shift();
console.log(num);

// UnShift Method adds the first element and returns new array length
console.log("----UnShift----");
num.unshift(1);
console.log(num);

// Delete Method deletes an element in array. It is not a method, but an operator
console.log("----Delete----");
delete num[0];
console.log(num);

let num_more = [11,12,13,14,15,16,17,18];

// Concat Method concats two arrays or elements
console.log("----Concat----");

let newArray = num.concat(num_more);
console.log(newArray);

// Sort Method sorts the array alphabetically
console.log("----Sort----");
console.log(num.sort()); // It will modify the original array
console.log(names.sort()); 

// If you want to sort an array in ascending order, use the compare function
console.log("-----Sorting the array in Ascending order-----");
let compare = (a,b) =>{
    return a-b;
}

console.log(num.sort(compare));

// If you want to sort an array in descending order, use the compare function
console.log("-----Sorting the array in Descending order-----");
let compare1 = (a,b) =>{
    return b-a;
}

console.log(num.sort(compare1));

// Reverse - Reverses the array
console.log("----Reverse----");
console.log(num.reverse());


// Splice - Can be used to add new items to an array, returns deleted items, modifies the array
console.log("----Splice----");
console.log(num.splice(2, 3, 1021,1022,1023, 1024));
console.log(num);

// Slice - Slices out a piece from an array. It creates a new array, doesnot modify the original array
console.log("----Slice----");
console.log(num.slice(3,5));
console.log(num);


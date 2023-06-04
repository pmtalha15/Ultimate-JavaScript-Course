// In the previous question use console.error to log the error if the age entered is negative

let a = prompt("Enter your age");

if (a<0 || a<18){
    console.error("Please enter a valid age");
}else{
    alert("You are eligible to drive!!!")
}
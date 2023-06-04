// Write the program to change the url to google.com (redirection) if user enters a number greater than 4

let a = prompt("Enter a number");

if (a>4){
    location.href = "https://google.com"
}else{
    alert("You entered the number: "+ a)
}
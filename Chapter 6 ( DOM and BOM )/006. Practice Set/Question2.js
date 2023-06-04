// In Q1 use confirm to ask the user if he wants to see the prompt again


let runAgain = true;
while(runAgain){
    let a = prompt("Enter your age");
    if (a >=18){
        alert("You are eligible to drive!!!")
    }else{
        alert("Sorry!!! You cannot drive");
    }
    runAgain = confirm("Do you want to enter the age again???")
}

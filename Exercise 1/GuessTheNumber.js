/* Write a Javascript program to generate a random number and store it in a variable.
The program then takes an input from the user to tell them whether the guess was correct, 
greater than or lesser than the original number.
100 - (no.of guesses) is the score of the user. The program is expected to terminate once the number is guessed.
Number should be between 1-100 */

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function playGuessingGame() {
  let randomNumber = generateRandomNumber();
  console.log(randomNumber);
  let guessCount = 0;
  let score = 100;

  while(guessCount < 5){
      let userInput = prompt("Enter the number between 1 and 100");
      userInput = Number.parseInt(userInput);

      if(userInput < 1 || userInput > 100){
          alert("Invalid Number!! Enter a number between 1 and 100");
          score -=20;
          guessCount++;
          alert("You have "+ (5 - guessCount) +" guesses left");
          continue;
      }
      if(userInput === randomNumber){
          alert("Congratulations!!! You guessed it right.");
          guessCount++;
          alert("You guessed it in "+ guessCount+ " guesses. Your score is "+ score);
          break;
      }
      else if(userInput < randomNumber){
          alert("The guessed number is lesser than the actual number. Try Again!!");
          score -=20;
          guessCount++;
          alert("You have "+ (5 - guessCount) +" guesses left");
      }
      else{
          alert("The guessed number is greater than the actual number. Try Again!!");
          score -=20;
          guessCount++;
          alert("You have "+ (5 - guessCount) +" guesses left");
      }

      if(guessCount == 5){
          alert("You have reached the maximum number of guesses. Thank you for playing.Your score is "+ score);
          break;
      }
  }
}

playGuessingGame();

  
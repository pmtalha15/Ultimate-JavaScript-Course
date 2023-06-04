/* Use JS to create a game of snake, water and gun.
The game should ask you to enter S, W or G. 
The computer should be able to randomly generate S,W or G and declare win or loss using alert.
Use confirm and prompt whenever required */


function playSnakeWaterGun() {
    let userScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 10; i++) {
      const userChoice = prompt(`Chance ${i}: Enter your choice: S (Snake), W (Water), or G (Gun)`).toUpperCase();
  
      if (userChoice !== "S" && userChoice !== "W" && userChoice !== "G") {
        alert("Invalid choice. Please try again.");
        i--;
        continue;
      }
  
      const computerChoice = generateRandomSWG();
  
      let result;
  
      if (userChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (userChoice === "S" && computerChoice === "W") ||
        (userChoice === "W" && computerChoice === "G") ||
        (userChoice === "G" && computerChoice === "S")
      ) {
        result = "You win!";
        userScore++;
      } else {
        result = "You lose!";
        computerScore++;
      }
  
      alert(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`);
    }
  
    alert(`Game over!\nYour score: ${userScore}\nComputer's score: ${computerScore}`);
  
    if (userScore > computerScore) {
      alert("You win!");
    } else if (userScore < computerScore) {
      alert("Computer wins!");
    } else {
      alert("It's a tie!");
    }
  }
  
  function generateRandomSWG() {
    const options = ["S", "W", "G"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  // Call the game function to start playing
  playSnakeWaterGun();
  

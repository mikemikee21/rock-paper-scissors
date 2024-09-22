function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random() * 3);

  return options[choiceIndex];
}

function getHumanChoice() {
  return prompt("Select Rock, Paper or Scissors");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("You tie!");
      } else if (computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
      } else if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
      } else if (computerChoice === "paper") {
        console.log("You tie!");
      } else if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
      } else if (computerChoice === "paper") {
        console.log("You win! Scissors beats paper!");
        humanScore++;
      } else if (computerChoice === "scissors") {
        console.log("You tie!");
      }
    } else {
      console.log("Please try again.");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}`);
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You won the whole game! CONGRATULATIONS!!!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else if (humanScore === computerScore) {
    console.log("The game is a tie!");
  }
}

playGame();

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random() * 3);

  return options[choiceIndex];
}

function getHumanChoice() {
  return prompt("Select Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("You tie!");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock!");
    } else if (computerChoice === "paper") {
      console.log("You tie!");
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper!");
    } else if (computerChoice === "scissors") {
      console.log("You tie!");
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

console.log(playRound(humanSelection, computerSelection));

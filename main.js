function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random());

  return choiceIndex;
}

function getHumanChoice() {
  return prompt("Select rock, paper or scissors");
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLower();

  // if (humanChoice === "rock"){
  //     if (computerChoice === "rock") {
  //         console.log("You tie!")
  //     }
  //     else if (computerChoice === "paper") {
  //         console.log("You win! Rock beats paper!")
  //     }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());

function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.33) {
    console.log("rock");
  } else if (choice > 0.33 && choice < 0.66) {
    console.log("paper");
  } else if (choice >= 0.66) {
    console.log("scissors");
  }
}

function getHumanChoice() {
  return prompt("Select rock, paper or scissors");
}

console.log(getComputerChoice());

console.log(getHumanChoice());

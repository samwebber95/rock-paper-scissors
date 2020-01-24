//start with the starting score variables

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// put the array of gameHistory in, comes in form of list that starts empty
// objects added to the list as each game of RPS is played

const gameHistory = [];

// create function that can be run to restart the game

function newGame(playerMove) {
  console.log("Player selects " + playerMove);
  let cpuMove = generateComputerMove();
  showComputerMove("Computer chooses: " + cpuMove);

  // create if statement that runs the game
  // contains different parameters depending on what the player and cpu choose
  // add show winner function (later in code) to show who wins on scoreboard

  if (playerMove === cpuMove) {
    showWinner("it’s a draw");
    drawScore++;
  } else if (playerMove === "rock") {
    if (cpuMove == "paper") {
      showWinner("cpu wins");
      computerScore++;
    } else if (cpuMove === "scissors") {
      showWinner("player wins");
      playerScore++;
    }
  } else if (playerMove === "scissors") {
    if (cpuMove === "rock") {
      showWinner("cpu wins");
      computerScore++;
    } else if (cpuMove === "paper") {
      showWinner("player wins");
      playerScore++;
    }
  } else if (playerMove === "paper") {
    if (cpuMove === "scissors") {
      showWinner("cpu wins");
      computerScore++;
    } else if (cpuMove === "rock") {
      showWinner("player wins");
      playerScore++;
    }
  }

  // add another variable directly after the game run code
  // this adds the results to the array that shows the game history scores

  let gameChoices = {
    playerMove,
    cpuMove
  };
  gameHistory.push(gameChoices);
  // create function to show game history
  // start with document, then method grabbing each element by the id
  // add text to be shown on the browser

  document.getElementById("wins").innerText = "Player score: " + playerScore;
  document.getElementById("losses").innerText =
    "Computer score: " + computerScore;
  document.getElementById("draws").innerText = "Draws: " + drawScore;
}

// Make the game history into a list, draw on the constant set at the start gameHistory
// Applies to playerMove and cpuMove

function drawHistory() {
  let historyElement = document.getElementById("history");
  let displayString = "";
  for (let i = 0; i < gameHistory.length; i++) {
    displayString +=
      "<li>" +
      gameHistory[i].playerMove +
      " vs " +
      gameHistory[i].cpuMove +
      "</li>";
  }
  historyElement.innerHTML = displayString;
}
drawHistory();

function generateComputerMove() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}

/// create a function to showMessage (change id “results” to our message)
// pass in our message when its called
// create a function that shows cpu move in web browser

function showMessage(message, id) {
  let resultElement = document.getElementById(id);
  resultElement.innerText = message;
}
function showWinner(message) {
  let resultElement = document.getElementById("results");
  resultElement.innerText = message;
}
function showComputerMove(message) {
  let resultElement = document.getElementById("cpu-choice");
  resultElement.innerText = message;
}
document.getElementById("rock").addEventListener("click", playRock);
document.getElementById("paper").addEventListener("click", playPaper);
document.getElementById("scissors").addEventListener("click", playScissors);

function playRock() {
  newGame("rock");
  let playerChoice = document.getElementById("player-choice");
  playerChoice.innerText = "Player chooses: Rock";
}
function playPaper() {
  newGame("paper");
  let playerChoice = document.getElementById("player-choice");
  playerChoice.innerText = "Player chooses: Paper";
}
function playScissors() {
  newGame("scissors");
  let playerChoice = document.getElementById("player-choice");
  playerChoice.innerText = "Player chooses: Scissors";
}

// Adding username input

// make alert if no username is put import
// make if statement- if there is input first then continue
// else, if nothing is entered, provide alert to screen

function handleUsername() {
  let input = document.getElementById("username-input");
  if (input.value) {
    console.log(true);
  } else {
    console.log(false);
    window.alert("Add valid username");
  }

  let display = document.getElementById("username-display");
  display.innerText = input.value;
}

let usernameBtn = document.getElementById("username-btn");
usernameBtn.addEventListener("click", handleUsername);

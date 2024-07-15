console.log("Connected!")

document.addEventListener("DOMContentLoaded", () => {
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  rock.addEventListener("click", (e) => {
    playGame("rock");
    // console.log("Rock clicked");
  });

  paper.addEventListener("click", (e) => {
    playGame("paper");
    // console.log("paper clicked");
  });

  scissors.addEventListener("click", (e) => {
   playGame("scissors");
    // console.log("Scissors clicked");
  })
});

let userScore = 0
let computerScore = 0
let topScore = 0

// function startGame() {
function score() {
  const gameUpdate = document.querySelector("#gameUpdate");
  const content = document.createElement("p");

  if (topScore < 5) {
    generateText(`Your score is ${userScore}, and the computer's score is ${computerScore}`)
  } else if (userScore === 5) {
    generateText("Congratulations, you win!") 
  } else if (computerScore === 5) {
    generateText("Tough luck! You lost. Womp womp")
  } else {
    generateText("Something... seems.... to... have... gone... wronnnngggggg................ ")
  }
}

function generateText(message){
  const gameUpdate = document.querySelector("#gameUpdate");
  const content = document.createElement("p");

  // gameUpdate.deletecon

  content.innerText=message;
  gameUpdate.appendChild(content);
}

function playGame(weapon) {
  let userWeapon = weapon
  
  generateText(`You chose ${userWeapon}`)
  let computerWeapon = gameWeapon()
  generateText(`The computer chose ${computerWeapon}`)
  battle(userWeapon, computerWeapon);
  score();
}

function calcScore(result) {
  if (result === "win") {
    userScore += 1 
  } else if (result === "lose") {
    computerScore += 1
  } else {
    return
  }
  highScore()
}

function highScore() {
  topScore = Math.max(userScore, computerScore)
}

function battle(userWeapon, computerWeapon) {
  switch (userWeapon) {
    case "rock": 
      if (computerWeapon === "rock") {
        generateText("It's a tie!")
        break
      } else if (computerWeapon === "paper") {
        generateText("You lose!")
        calcScore("lose")
        break
      } else {
        generateText("You win!")
        calcScore("win")
        break
      }
    case "paper":
      if (computerWeapon === "paper") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "scissors") {
        generateText("You lose!")
        calcScore("lose")
        break
      } else {
        generateText("You win!")
        calcScore("win")
        break
      }
    case "scissors":
      if (computerWeapon === "scissors") {
        generateText("It's a tie!")
        break
      } else if (computerWeapon === "rock") {
        generateText("You lose!")
        calcScore("lose")
        break
      } else {
        generateText("You win!")
        calcScore("win")
        break
      }
    default:
      generateText("Sorry, you need to pick 'rock', 'paper', or scissors' to play the game.")
  }
}

function gameWeapon () {
  let selection = getRandomInt(3)
  
  if (selection === 0) {
    return "rock"
  } else if (selection === 1) {
    return "paper"
  } else if (selection === 2) {
    return "scissors"
  } else {
    return "Something went wrong"
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
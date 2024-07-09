console.log("Connected!")

let userScore = 0
let computerScore = 0
let topScore = 0

function startGame() {
  
  while (topScore < 3) {
    playGame()
    console.log(`Your score is ${userScore}, and the computer's score is ${computerScore}`)
  }
  if (userScore === 3) {
    console.log("Congratulations, you win!") 
  } else if (computerScore === 3) {
    console.log("Tough luck! You lost. Womp womp")
  } else {
    console.log("Something... seems.... to... have... gone... wronnnngggggg................ ")
  }
}

function playGame() {
  calcScore()
  let weapon = getWeapon()
  let userWeapon = weapon.toLowerCase()
  console.log(`You chose ${userWeapon}`)
  let computerWeapon = gameWeapon()
  console.log(`The computer chose ${computerWeapon}`)
  battle(userWeapon, computerWeapon)
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

function getWeapon() {
  let weapon = prompt("What weapon do you choose?")
  return weapon
}

function battle(userWeapon, computerWeapon) {
  switch (userWeapon) {
    case "rock": 
      if (computerWeapon === "rock") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "paper") {
        console.log("You lose!")
        calcScore("lose")
        break
      } else {
        console.log("You win!")
        calcScore("win")
        break
      }
    case "paper":
      if (computerWeapon === "paper") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "scissors") {
        console.log("You lose!")
        calcScore("lose")
        break
      } else {
        console.log("You win!")
        calcScore("win")
        break
      }
    case "scissors":
      if (computerWeapon === "scissors") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "rock") {
        console.log("You lose!")
        calcScore("lose")
        break
      } else {
        console.log("You win!")
        calcScore("win")
        break
      }
    default:
      console.log("Sorry, you need to pick 'rock', 'paper', or scissors' to play the game.")
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
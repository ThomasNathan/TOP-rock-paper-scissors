console.log("Connected!")

// Game is played in console...
// method called playGame
// Ask for input 
// generate random number 1-3
// Assign numbers to rock, paper, or scissors
// conditionals...

// let theGameWeapon = gameWeapon

function playGame(weapon = "rock") {
  let userWeapon = weapon.toLowerCase()
  console.log(`You chose ${userWeapon}`)
  let computerWeapon = gameWeapon()
  console.log(`The computer chose ${computerWeapon}`)
  battle(userWeapon, computerWeapon)
}

function battle(userWeapon, computerWeapon) {
  switch (userWeapon) {
    case "rock": 
      if (computerWeapon === "rock") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "paper") {
        console.log("You lose!")
        break
      } else {
        console.log("You win!")
        break
      }
    case "paper":
      if (computerWeapon === "paper") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "scissors") {
        console.log("You lose!")
        break
      } else {
        console.log("You win!")
        break
      }
    case "scissors":
      if (computerWeapon === "scissors") {
        console.log("It's a tie!")
        break
      } else if (computerWeapon === "rock") {
        console.log("You lose!")
        break
      } else {
        console.log("You win!")
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
  return Math.floor(Math.random() * max);
}
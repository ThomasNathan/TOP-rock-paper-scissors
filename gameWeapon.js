function gameWeapon() {
  let selection = Math.random(3);

  if (selection === 0) {
    return "rock";
  } else if (selection === 1) {
    return "paper";
  } else if (selection === 2) {
    return "scissors";
  } else {
    return "Something went wrong";
  }
}

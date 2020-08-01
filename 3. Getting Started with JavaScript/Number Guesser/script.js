let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanNum, coumputerNum, targetNum) => {
  const humanDiff = Math.abs(targetNum-humanNum);
  const computerDiff = Math.abs(targetNum-coumputerNum);

  if (humanDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}

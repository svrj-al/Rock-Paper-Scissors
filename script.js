let computerSelection;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

const computerChoice = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {   
    if (computerSelection === computerChoice[2]) {
      return 'You win, rock beats scissors!'
    } else if (computerSelection === computerChoice[1]) {
      return 'You lose, paper beats rock!';
    } else if (computerSelection === computerChoice[0]) {
      return 'Even score!';
    } else {
      return 'Something went wrong';
    }
  
  } else if (playerSelection === 'paper') {
      if (computerSelection === computerChoice[0]) {
      return 'You win, paper beats rock!';
    } else if (computerSelection === computerChoice[2]) {
      return 'You lose, scissors beats paper!';
    } else if (computerSelection === computerChoice[1]) {
      return 'Even score!';
    } else {
      return 'Something went wrong';
  }
  
  } else if (playerSelection === 'scissors') {
      if (computerSelection === computerChoice[1]) {
      return 'You win, scissors beats paper!';
    } else if (computerSelection === computerChoice[0]) {
      return 'You lose, rock beats scissors!';
    } else if (computerSelection === computerChoice[2]) {
      return 'Even score!';
    } else {
      return 'Something went wrong';
    }
    
  } else {
    return "Something went wrong"
  } 
}

function countScore(result) {
  const newResultPlayer = result.slice(0, 7);
  const newResultComputer = result.slice(0, 8);
  if (newResultPlayer === 'You win') {
    playerScore++;
  } else if (newResultComputer === 'You lose') {
    computerScore++;
  }
}

function compareScore() {
  if (playerScore >= 5) {
    document.getElementById('containerTwo').innerHTML = `You won the game <br>
        Reload page to play again`;
    buttons.forEach((button) => {
      button.removeEventListener('click', singleRound)
    });
  } else if (computerScore >= 5) {
    document.getElementById('containerTwo').innerHTML = `You lost the game <br>
    Reload page to play again`;
    buttons.forEach((button) => {
      button.removeEventListener('click', singleRound)
    });
  }
}

let singleRound = (e) => {
  playerSelection = e.target.id;
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);
  countScore(result);
  compareScore();
  document.getElementById('container').innerHTML = `
      Player: ${playerScore} vs Computer: ${computerScore} <br>  
      ${result} <br>
      Player: ${playerSelection} <br>
      Computer: ${computerSelection} <br>`;
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', singleRound)
});
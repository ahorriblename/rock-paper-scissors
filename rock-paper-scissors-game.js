function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = getComputerChoice();

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'Paper':
      return 'You lost! Paper beats rock!';
      break;

    case playerSelection === 'rock' && computerSelection === 'Rock':
      return 'Draw! You both picked rock!';
      break;
  
    case playerSelection === 'rock' && computerSelection === 'Scissors':
      return 'You won! Rock beats scissors!';
      break;

    case playerSelection === 'paper' && computerSelection === 'Paper':
      return 'Draw! You both picked paper!';
      break;

    case playerSelection === 'paper' && computerSelection === 'Rock':
      return 'You won! Paper beats rock!';
      break;

    case playerSelection === 'paper' && computerSelection === 'Scissors':
      return 'You lost! Scissors beats paper!';
      break;
      
    case playerSelection === 'scissors' && computerSelection === 'Paper':
      return 'You won! Scissors beats paper!';
      break;

    case playerSelection === 'scissors' && computerSelection === 'Rock':
      return 'You lost! Rock beats scissors!';
      break;

    case playerSelection === 'scissors' && computerSelection === 'Scissors':
      return 'Draw! You both picked scissors!';
      break;
  }
}
function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  let playerWin = false
  let compWin = false
  playerSelection = playerSelection.toLowerCase()
  computerSelection = getComputerChoice();

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'Paper':
      console.log( 'You lost! Paper beats rock!');
      break;

    case playerSelection === 'rock' && computerSelection === 'Rock':
      console.log( 'Draw! You both picked rock!');
      break;
  
    case playerSelection === 'rock' && computerSelection === 'Scissors':
      console.log( 'You won! Rock beats scissors!');
      break;

    case playerSelection === 'paper' && computerSelection === 'Paper':
      console.log( 'Draw! You both picked paper!');
      break;

    case playerSelection === 'paper' && computerSelection === 'Rock':
      console.log( 'You won! Paper beats rock!');
      break;

    case playerSelection === 'paper' && computerSelection === 'Scissors':
      console.log( 'You lost! Scissors beats paper!');
      break;
      
    case playerSelection === 'scissors' && computerSelection === 'Paper':
      console.log( 'You won! Scissors beats paper!');
      break;

    case playerSelection === 'scissors' && computerSelection === 'Rock':
      console.log( 'You lost! Rock beats scissors!');
      break;

    case playerSelection === 'scissors' && computerSelection === 'Scissors':
      console.log( 'Draw! You both picked scissors!');
      break;
  }
}

function game()
  for(let round = 1; round < 5; round++) {
    playRound();
}

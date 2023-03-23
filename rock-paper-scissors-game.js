function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  let playerWin = false;
  let compWin = false;
  let bothTie = false;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'Paper':
      console.log( 'You lost! Paper beats rock!');
      return compWin = true
      break;

    case playerSelection === 'rock' && computerSelection === 'Rock':
      console.log( 'Draw! You both picked rock!');
      return bothTie = true
      break;
  
    case playerSelection === 'rock' && computerSelection === 'Scissors':
      console.log( 'You won! Rock beats scissors!');
      return playerWin = true
      break;

    case playerSelection === 'paper' && computerSelection === 'Paper':
      console.log( 'Draw! You both picked paper!');
      return bothTie = true
      break;

    case playerSelection === 'paper' && computerSelection === 'Rock':
      console.log( 'You won! Paper beats rock!');
      return playerWin = true
      break;

    case playerSelection === 'paper' && computerSelection === 'Scissors':
      console.log( 'You lost! Scissors beats paper!');
      return compWin = true
      break;
      
    case playerSelection === 'scissors' && computerSelection === 'Paper':
      console.log( 'You won! Scissors beats paper!');
      return playerWin = true
      break;

    case playerSelection === 'scissors' && computerSelection === 'Rock':
      console.log( 'You lost! Rock beats scissors!');
      return compWin = true
      break;

    case playerSelection === 'scissors' && computerSelection === 'Scissors':
      console.log( 'Draw! You both picked scissors!');
      return bothTie = true
      break;
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  for (let round = 0; round < 5; round++) {
    playRound('rock');
    
    if (playerWin == true) {
      playerScore++; 
      console.log('Your score: ' + playerScore);
      console.log('Comp score: ' + compScore);
    } else if (compWin == true) {
      compScore++;
      console.log('Your score: ' + playerScore);
      console.log('Comp score: ' + compScore);
    } else  if (bothTie == true ){
      console.log('Your score: ' + playerScore);
      console.log('Comp score: ' + compScore);
    }

    playerWin = false;
    compWin = false;
    bothTie = false;
  }
}

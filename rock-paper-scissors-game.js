function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice
}

let playerWin = false
let compWin = false
let bothTie = false

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'Paper':
      console.log( 'You lost! Paper beats rock!');
      return compWin = true

    case playerSelection === 'rock' && computerSelection === 'Rock':
      console.log( 'Draw! You both picked rock!');
      return bothTie = true
  
    case playerSelection === 'rock' && computerSelection === 'Scissors':
      console.log( 'You won! Rock beats scissors!');
      return playerWin = true

    case playerSelection === 'paper' && computerSelection === 'Paper':
      console.log( 'Draw! You both picked paper!');
      return bothTie = true

    case playerSelection === 'paper' && computerSelection === 'Rock':
      console.log( 'You won! Paper beats rock!');
      return playerWin = true

    case playerSelection === 'paper' && computerSelection === 'Scissors':
      console.log( 'You lost! Scissors beats paper!');
      return compWin = true
      
    case playerSelection === 'scissors' && computerSelection === 'Paper':
      console.log( 'You won! Scissors beats paper!');
      return playerWin = true

    case playerSelection === 'scissors' && computerSelection === 'Rock':
      console.log( 'You lost! Rock beats scissors!');
      return compWin = true

    case playerSelection === 'scissors' && computerSelection === 'Scissors':
      console.log( 'Draw! You both picked scissors!');
      return bothTie = true
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  for (let round = 0; round < 5; round++) {
    playRound();
    
    if (playerWin === true) {
      playerScore++; 
      console.log('Your score: ' + playerScore);
      console.log('Comp score: ' + compScore);
    } else if (compWin === true) {
      compScore++;
      console.log('Your score: ' + playerScore);
      console.log('Comp score: ' + compScore);
    } else  if (bothTie === true ) {
      console.log('Your score: ' + playerScore);
      console.log('Comp score: ' + compScore);
    }

    playerWin = false;
    compWin = false;
    bothTie = false;
  }

  if (playerScore > compScore) {
    return 'You won! You beat the computer'
  } else if (compScore > playerScore) {
    return 'You lost! The computer beat you!'
  } else {
    return 'Draw! Nobody wins! Try again next time!'
  }
}

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));
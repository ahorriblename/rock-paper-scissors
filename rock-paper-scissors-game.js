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
      div.textContent = 'You lost! Paper beats rock!';
      div.style.cssText = 'background-color: red; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return compWin = true;

    case playerSelection === 'rock' && computerSelection === 'Rock':
      div.textContent = 'Draw! You both picked rock!';
      div.style.cssText = 'background-color: grey; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return bothTie = true;
  
    case playerSelection === 'rock' && computerSelection === 'Scissors':
      div.textContent = 'You won! Rock beats scissors!';
      div.style.cssText = 'background-color: green; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return playerWin = true;

    case playerSelection === 'paper' && computerSelection === 'Paper':
      div.textContent = 'Draw! You both picked paper!';
      div.style.cssText = 'background-color: grey; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return bothTie = true;

    case playerSelection === 'paper' && computerSelection === 'Rock':
      div.textContent = 'You won! Paper beats rock!';
      div.style.cssText = 'background-color: green; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return playerWin = true;

    case playerSelection === 'paper' && computerSelection === 'Scissors':
      div.textContent = 'You lost! Scissors beats paper!';
      div.style.cssText = 'background-color: red; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return compWin = true;
      
    case playerSelection === 'scissors' && computerSelection === 'Paper':
      div.textContent = 'You won! Scissors beats paper!';
      div.style.cssText = 'background-color: green; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return playerWin = true;

    case playerSelection === 'scissors' && computerSelection === 'Rock':
      div.textContent = 'You lost! Rock beats scissors!';
      div.style.cssText = 'background-color: red; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return compWin = true;

    case playerSelection === 'scissors' && computerSelection === 'Scissors':
      div.textContent = 'Draw! You both picked scissors!';
      div.style.cssText = 'background-color: grey; border: 2px black solid; font-size: 40px;';
      container.appendChild(div);
      return bothTie = true;
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

const container = document.querySelector('.container');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

const div = document.createElement('div');
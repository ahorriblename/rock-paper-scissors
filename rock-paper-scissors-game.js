function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice
}

let playerWin = false
let compWin = false
let bothTie = false

let playerScores = 0;
let compScore = 0;

let roundNumber = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'Paper':
      div.textContent = 'You lost! Paper beats rock!';
      div.style.cssText = 'background-color: red; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return compWin = true;

    case playerSelection === 'rock' && computerSelection === 'Rock':
      div.textContent = 'Draw! You both picked rock!';
      div.style.cssText = 'background-color: grey; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return bothTie = true;
  
    case playerSelection === 'rock' && computerSelection === 'Scissors':
      div.textContent = 'You won! Rock beats scissors!';
      div.style.cssText = 'background-color: green; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return playerWin = true;

    case playerSelection === 'paper' && computerSelection === 'Paper':
      div.textContent = 'Draw! You both picked paper!';
      div.style.cssText = 'background-color: grey; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return bothTie = true;

    case playerSelection === 'paper' && computerSelection === 'Rock':
      div.textContent = 'You won! Paper beats rock!';
      div.style.cssText = 'background-color: green; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return playerWin = true;

    case playerSelection === 'paper' && computerSelection === 'Scissors':
      div.textContent = 'You lost! Scissors beats paper!';
      div.style.cssText = 'background-color: red; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return compWin = true;
      
    case playerSelection === 'scissors' && computerSelection === 'Paper':
      div.textContent = 'You won! Scissors beats paper!';
      div.style.cssText = 'background-color: green; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return playerWin = true;

    case playerSelection === 'scissors' && computerSelection === 'Rock':
      div.textContent = 'You lost! Rock beats scissors!';
      div.style.cssText = 'background-color: red; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return compWin = true;

    case playerSelection === 'scissors' && computerSelection === 'Scissors':
      div.textContent = 'Draw! You both picked scissors!';
      div.style.cssText = 'background-color: grey; border: 2px black solid; font-size: 40px; width: 35%; height: 100px; display: flex; justify-content: center; align-items: center; margin: 20px;';
      newDiv.appendChild(div);
      return bothTie = true;
  }
}

function game(choice) {
  playRound(choice);
  newRoundDiv.textContent = '';
  roundNumber += 1;
  roundText.textContent = 'Round Number: ' + roundNumber;

  if (playerWin === true) {
    playerScores += 1;
    playerScore.textContent = 'Player Score: ' + playerScores;
  } else if (compWin === true) {
    compScore += 1;
    computerScore.textContent = 'Computer Score: ' + compScore;
  };

    compWin = false;
    playerWin = false;
    bothTie = false;

    if (roundNumber >= 5) {
      checkScore();
      playerScores = 0;
      compScore = 0;
      roundNumber = 0;
      playerScore.textContent = 'Player Score: 0' ;
      computerScore.textContent = 'Computer Score: 0';
      roundText.textContent = 'Round Number: 0';
      newRoundDiv.textContent = 'Game Reset!';
      roundsDiv.appendChild(newRoundDiv);
    };
  };

function checkScore() {
  if (playerScores < compScore) {
    div.textContent = 'You lost the game! Better luck next time!';
    div.style.background = 'red';
  } else if (playerScores > compScore) {
    div.textContent = 'You won the game! You beat the computer!';
    div.style.background = 'green';
  } else {
    div.textContent = 'Draw! Nobody won, try again next time!';
    div.style.background = 'grey';
  };
};

const newDiv = document.querySelector('.newDiv');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const computerScore = document.querySelector('#computer');
const playerScore = document.querySelector('#player');
const roundsDiv = document.querySelector('.rounds');
const roundText = document.querySelector('.round-text');

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));

const div = document.createElement('div');
const newRoundDiv = document.createElement('div');
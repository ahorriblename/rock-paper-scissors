function getComputerChoice () {
let choices = ['Rock', 'Paper', 'Scissors']
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
return computerChoice
}

//Computer choice
function getComputerChoice (max) {
    var randomNumber = Math.floor(Math.random() * max);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice(3));

//Human choice
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const container = document.getElementById('container');

let humanChoice = '';
let winner = '';

rockButton.addEventListener('click', () => {
    humanChoice = 'Rock';
    playRound();
});  
paperButton.addEventListener('click', () => {
    humanChoice = 'Paper';
    playRound();
});
scissorsButton.addEventListener('click', () => {
    humanChoice = 'Scissors';
    playRound();
 });



    //let humanChoiceText = document.createElement('p');
    //humanChoiceText.textContent = `You chose ${getHumanChoice}`;
   // container.appendChild(humanChoiceText);

//addEventListener when user clicks on either rock, paper or scissors 
//if user clicks rock trigger playround with 'rock' as humanChoice and so on

//playround -
function playRound () {
    const computerChoice = getComputerChoice();
    let humanChoiceText = document.createElement('p');
    let computerChoiceText = document.createElement('p');
    let winnerText = document.createElement('p');
    if (humanChoice === computerChoice) {
        //return 'tie';
        console.log('tie');
        winnerText.textContent = `It's a tie!`;
    }
    else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||     
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ){   
        //return 'human';
        console.log('human');
        winner = 'human';
        winnerText.textContent = `You won this round!`;
    }
    else {
        //return 'computer';
        console.log('computer');
        winner = 'computer';
        winnerText.textContent = `Computer won this round!`;
    }
    humanChoiceText.textContent = `You chose ${humanChoice}`;
    computerChoiceText.textContent = `Computer chose ${computerChoice}`;
    container.appendChild(humanChoiceText);
    container.appendChild(computerChoiceText);
    container.appendChild(winnerText);
}





//PlayGame -
//1. 


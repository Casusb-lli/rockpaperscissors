
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

//Human choice
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const container = document.getElementById('container');

let humanScore = 0;
let computerScore = 0;
let round = 0; 


var humanSelector = [];
var computerSelector = getComputerChoice(3);

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice(3));
    humanSelector.push('Rock');
});
paperButton.addEventListener ('click', () => {
    playRound('Paper', getComputerChoice(3));
    humanSelector.push('Paper');
});
scissorsButton.addEventListener ('click', () => {
    playRound('Scissors', getComputerChoice(3));;
    humanSelector.push('Scissors');
});

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie';
    }
    else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||     
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ){   
        return 'human';
    }
    else {
        return 'computer';
    }
}


//Play a round

function playGame () {
    for (let round = 0; round < 5; round++) {
        playRound();

        //Show human choice
        var humanChoiceText = document.createElement('p');
        humanChoiceText.textContent = `You chose ${humanSelector}`;
        container.appendChild(humanChoiceText);

        var winner = playRound();
        if (winner === 'human') {
            humanScore++;
            var humanWonText = document.createElement('p');
            humanWonText.textContent = `You won the round`;
            container.appendChild(humanWonText);
        } else if (winner === 'computer') {
            computerScore++;
            var computerWonText = document.createElement('p');
            computerWonText.textContent = `Computer won the round`;
            container.appendChild(computerWonText);
        } else {
            var tieText = document.createElement('p');
            tieText.textContent = `Computer won the round`;
            container.appendChild(tieText);
        }
    }
    console.log("Final Score:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins overall. Better luck next time!");
    } else {
        console.log("It's an overall tie!");
    } 
}


playGame();





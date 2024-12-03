//Computer choice
function getComputerChoice (max) {
    //Computer should chose a random number between 0-2
    //Depending on which number it will return Rock, Paper or Scissors
    var randomNumber = Math.floor(Math.random() * max);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else if (randomNumber === 2 ) {
        return 'Scissors';
    }
}



//Human choice
function getHumanChoice () {
    //The choice should be user input
    //return input as Rock, Paper or Scissors, no lowercase sensible
    let input = prompt('Rock, paper or scissors?');
    if (input.toLowerCase() === 'rock') {
        return 'Rock';
    } else if (input.toLowerCase() === 'paper') {
        return 'Paper';
    } else if (input.toLowerCase() === "scissors") {
        return 'Scissors';
    } else {
        console.log('invalid input, Rock is set as default');
        return 'Rock';
    }
}

//Play a round
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




//Play a game of 5 rounds
function playGame () {
    //Create a 5 time loop that 1. tells you which round it is 2. the computer and human choice 3. Current score
    //After each round present the final score
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        playRound();
        console.log(`Round: ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`You chose ${humanSelection}`);
        const winner = playRound(humanSelection, computerSelection);
        if (winner === 'tie') {
            console.log ('It`s a tie!');
        }
        else if (winner === 'human') {
            humanScore++;
            console.log('You won this round');
        } else {
            computerScore++;
            console.log('Computer won this round');
        }
        console.log(`Current score - You: ${humanScore} and Computer: ${computerScore}`);
        console.log('----------------------------');
    }
    if (humanScore > computerScore) {
        console.log('You won the game!');
    } else if (humanScore < computerScore) {
        console.log('Unfortunality, the computer won');
        
    }   
}

playGame();
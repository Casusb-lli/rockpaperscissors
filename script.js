
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
function getHumanChoice () {
    let input = prompt('Rock, Paper or Scissors?');
    if (input.toLowerCase() === 'rock') {
        return 'Rock';
    } else if (input.toLowerCase() === 'paper') {
        return 'Paper';
    } else if (input.toLowerCase() === 'scissors') {
        return 'Scissors';
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


function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        const winner = playRound(humanSelection, computerSelection);
        if (winner === 'human') {
            humanScore++;
            console.log('You are the winner of this round!');
        } else if (winner === 'computer') {
            computerScore++;
            console.log('Computer won this round')
        } else {
            console.log('It`s a tie this round');
        }

        console.log(`Current score - You: ${humanScore} Computer: ${computerScore}`);
        console.log('------------');
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





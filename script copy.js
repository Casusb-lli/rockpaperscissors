
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

//Get buttons and containers
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const container = document.getElementById('container');

//Global variables to track game state
let humanChoice = '';
let roundWinner = '';
let roundsPlayed = 0;
let gameWinner = '';
let humanScore = 0;
let computerScore = 0;


//PSUDO CODE
//addEventListener when user clicks on either rock, paper or scissors 
//if user clicks rock trigger playround with 'rock' as humanChoice and so on
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

//PSUDO CODE
//1. Play 5 rounds
//2. For each round display 1. Which round 2. the score 3. Who won
//3. After all rounds show who won 
function playRound() {
    container.innerHTML = '';
    
    const computerChoice = getComputerChoice();
    let computerChoiceText = document.createElement('p');
    let humanChoiceText = document.createElement('p');
    let roundWinnerText = document.createElement('p');
    let roundsPlayedText = document.createElement('p');
    let scoreText = document.createElement('p');


    if (humanChoice === computerChoice) {
        roundWinnerText.textContent = `It's a tie!`;
    }
    else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||     
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ){   
        roundWinner = 'human';
        roundWinnerText.textContent = `You won this round`;
        humanScore++;
    }
    else {
        roundWinner = 'computer';
        roundWinnerText.textContent = `Computer won this round!`;
        computerScore++;
    }
    humanChoiceText.textContent = `You chose ${humanChoice}`;
    roundsPlayedText.textContent = roundsPlayed+1;
    computerChoiceText.textContent = `Computer chose ${computerChoice}`;
    scoreText.textContent = `Current Score - You: ${humanScore}   Computer: ${computerScore}`;
    container.appendChild(roundsPlayedText);
    container.appendChild(humanChoiceText);
    container.appendChild(computerChoiceText);
    container.appendChild(roundWinnerText);
    container.appendChild(scoreText);


//Make it a 5 rounds game
    roundsPlayed++;

    if (roundsPlayed === 5) {
        displayGameOver();
    }

//PSUDO CODE
//1. Restart variables - humanScore, computerScore, roundsPlayed
//2. set gameOver as false
//3. Enable buttons
//4. REMOVE ALL TEXT
    function startNewGame () {
        container.innerHTML = '';
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        }

    //SUDO CODE
    //Display winner text depending on winner
    //Disable rock, paper, scissors buttons
    //Create and append start new game button
    function displayGameOver () {
        //winner text
        let gameWinnerText = document.createElement('p');
        if (humanScore > computerScore) {
            gameWinnerText.textContent = `Good job, you won!`;
        } else if (humanScore < computerScore) {
            gameWinnerText.textContent = `Better luck next time, computer won!`;
        } else {
            gameWinnerText.textContent = `It's a tie!`;
        }
        container.appendChild(gameWinnerText);

        //disable buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        //Create and append start new button
        let startNewButton = document.createElement('button');
        startNewButton.textContent = 'Start new game';
        container.appendChild(startNewButton);

        startNewButton.addEventListener('click', () => {
            startNewGame();
        })
    }
}    








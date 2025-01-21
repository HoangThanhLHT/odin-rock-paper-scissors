// test if script.js link with index.html correctly
// console.log("Hello World!")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    let choice;
    // console.log(choice);
    if (randomNumber === 0) {
        choice = 'rock'
    } else if (randomNumber === 1) {
        choice = 'paper'
    } else {
        choice = 'scissors'
    };
    return choice;
};

// test function getComputerChoice
// console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt('Enter your choice (rock, paper, scissors)').toLowerCase()
    // console.log(userInput)
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        userInput = getComputerChoice();
        console.log(`Invalid Input, 
            You get a random choice 
            which is ${userInput}`);
        return userInput;
    }
};

// console.log(getHumanChoice())

// Create 2 variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Tie!')
    } else if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            console.log('You lose! Paper beats Rock');
            computerScore++;
        } else {
            console.log('You win! Rock beats Scissors')
            humanScore++;
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log('You win! Paper beats Rock');
            humanScore++;
        } else {
            console.log('You lose! Scissors beats Paper');
            computerScore++;
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'paper') {
            console.log('You lose! Paper beats Scissors');
            computerScore++;
        } else {
            console.log('You win! Scissors beats Rock')
            humanScore++;
        }
    }
};

// const humanSelection = getHumanChoice();

// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log(`Score ${humanScore} : ${computerScore}`)

function playGame() {
    console.log('1st Round');
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score ${humanScore} : ${computerScore}`);

    console.log('2nd Round');
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score ${humanScore} : ${computerScore}`);

    console.log('3rd Round');
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score ${humanScore} : ${computerScore}`);

    console.log('4th Round');
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score ${humanScore} : ${computerScore}`);

    console.log('5th Round');
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score ${humanScore} : ${computerScore}`);

    if (humanScore == computerScore) {
        console.log('No Winner!');
    } else if (humanScore > computerScore) {
        console.log('You Win!');
    } else {
        console.log('You Lose!');
    };
}

playGame()
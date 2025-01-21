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
    }
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
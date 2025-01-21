// test if script.js link with index.html correctly
// console.log("Hello World!")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
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
console.log(getComputerChoice());
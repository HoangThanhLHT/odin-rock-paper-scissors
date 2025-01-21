# odin-rock-paper-scissors

## Understand Problem

Write a program play rock-paper-scissors with computer
write a function that randomly returns "rock", "paper", "scissors".
write a function takes user choice and return valid choice
The game will track of player/computer scores

## Pseudocode

Create function `getComputerChoice`
    create variable `randomNumber` return random integer number between 0 and 2
    return choice 'rock' 'paper' 'scissors' base on `randomNumber`

Create function `getHumanChoice`
    create variable `userInput` that take user input
    If `userInput` valid then return `userInput`
    else not valid
        print 'wrong input, get random choice'
        return `getComputerChoice()`

Create 2 variables `humanScore` and `computerScore`, initialize with value `0`
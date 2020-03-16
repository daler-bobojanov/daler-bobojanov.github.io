// Game Pseudocode

// <------ On landing page, Modal with "Instructions" and "Start" button ------>
const $gameBoard = document.body.querySelector('.gameBoard');

const $playerOne = document.body.querySelector('.playerOne');
const $playerTwo = document.body.querySelector('playerTwo');

const $rock = document.body.querySelector('.rock');
const $paper = document.body.querySelector('.paper');
const $scissors = document.body.querySelector('.scissors');

const $gameBoardWidth = $gameBoard.offsetWidth;
const $gameBoardHeight = $gameBoard.offsetHeight;

// The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list. Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
const playerOneClassList = $playerOne.classList;
const playerTwoClassList = $playerTwo.classList;

let gameOver = true;

const playerOne = {
    x: 0,
    y: 3
};

const playerTWo = {
    x: 12,
    y: 3
};

const obstacles = [
    {x: 4, y: 3},
    {x: 8, y: 3}
];

const rock = {
    x: 6,
    y: 1
};

const paper = {
    x: 6,
    y: 3
};

const scissors = {
    x: 6,
    y: 5
};


// <------ Implement "swap" method for characters to be able to switch 'weapons ------>


// <------ Implement "collision detection" method for Win/Lose state ----->


// <------ Another Modal to announce which Player won. And "Play again" button ----->


// <------ Creat eventListeners for key controls/press for both characters ------>


// <----- Implement a function for character movements within the game grid ----->


// <----- Implement "Players Score board" ----->
// <----- Implement "Players remaining Health left Bar" ----->
// <----- Implement "GO to home page" button and function ---->
// <----- Bonus:: add sound audio for certain movements and actions ----->
// Game Pseudocode

// <------ On landing page, Modal with "Instructions" and "Start" button ------>
const $gameBoard = document.body.querySelector('.gameBoard');

const $playerOne = document.body.querySelector('.playerOne');
const $playerTwo = document.body.querySelector('.playerTwo');

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

const playerTwo = {
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

// checks if the provided coordinate/movement is within the gameBoard's bounds. Returns a Boolean.
// code implementation was referred from 'Blerf' game @https://wakeful-baritone.glitch.me/

const isCoordinateInGrid = (x, y) => {
    if(x < 0 || y < 0 || x > 12 || y > 6){
        return false;
    }
        return true;
}; 

// checks whether there's an obstacle at a coordinate.
const isThereAnObstacleAt = (x, y) => {
    // loop through obstacles, and check if any obstacle is at the given point.
    for (let i = 0; i < obstacles.length; i++){
        const obstacle = obstacles[i];
        if (obstacle.x === x && obstacle.y === y){
            return true;
        }
    }
    return false;
};

// function that checks whether a character can move to a given coordinate. Returns a Boolean.
const canMoveTo = (x, y) => {
    // if the coordinate to move is outside of the grid, the player can't move to it.
    if (!isCoordinateInGrid(x, y)) {
        return false;
    }
    // if there's an obstacle at the coordinate, the player can't move to it.
    if (isThereAnObstacleAt(x, y)) {
        return false;
    }
    return true;
};

// checks the condition if players have a weapon/tool. Returns a Boolean.
const doesPlayerOneHaveWeapon = () => {
    if (playerOne.weapon === undefined) {
        return false;
    }
    return true;
};

const doesPlayerTwoHaveWeapon = () => {
    if (playerTwo.weapon === undefined) {
        return false;
    }
    return true;
};

// conditions for when characters reaching for a weapon/tool.
const playerOneWeapon = (x, y) => {
    // if Player One doesn't have a weapon do the following..
    if (!doesPlayerOneHaveWeapon()) {
        if (rock.x === x && rock.y === y) {
            $playerOne.classList.add('playerOneWithRock');
            $rock.remove();
            $playerOne.weapon = 'Rock';
            rock.x = -6;
            rock.y = -1;
        } else if (paper.x === x && paper.y === y) {
            $playerOne.classList.add('playerOneWithPaper');
            $paper.remove();
            playerOne.weapon = 'Paper';
            paper.x = -6;
            paper.y = -3;
        } else if (scissors.x === x && scissors.y === y) {
            $playerOne.classList.add('playerOneWithScissors');
            $scissors.remove();
            scissors.x = -6;
            scissors.y = -5;
        }
        // Otherwise, Player One does have a weapon.
        } else if (doesPlayerOneHaveWeapon()) {

        /* <---- WEAPON SWAP METHOD! ----> */
            /* <--- For Player One ---> */
                // swaps scissors with rock, only if player has scissors.
        if (rock.x === x && rock.y === y) {
            if (playerOneClassList[2] === 'playerOneWithScissors') {
                $playerOne.classList.remove('playerOneWithScissors');
                $playerOne.classList.add('playerOneWithRock');
                $rock.remove();
                $gameBoard.appendChild($scissors);
                playerOne.weapon = 'Rock';
                rock.x = -6;
                rock.y = -1;
                scissors.x = 6;
                scissors.y = 5;
                // swaps paper with rock, only if player has paper.
            } else if (playerOneClassList[2] === 'playerOneWithPaper') {
                $playerOne.classList.remove('playerOneWithPaper');
                $playerOne.classList.add('playerOneWithRock');
                $rock.remove();
                $gameBoard.appendChild($paper);
                playerOne.weapon = 'Rock';
                rock.x = -6;
                rock.y = -1;
                paper.x = 6;
                paper.y = 3;
            }
                // swaps scissors with paper, only when player has scissors.
        } else if (paper.x === x && paper.y === y) {
            if (playerOneClassList[2] === 'playerOneWithScissors') {
                $playerOne.classList.remove('playerOneWithScissors');
                $playerOne.classList.add('playerOneWithPaper');
                $paper.remove();
                $gameBoard.appendChild($scissors);
                playerOne.weapon = 'Paper';
                paper.x = -6;
                paper.y = -3;
                scissors.x = 6;
                scissors.y = 5;
                // swaps rock with paper, only when player has rock.
            } else if (playerOneClassList[2] === 'playerOneWithRock') {
                $playerOne.classList.remove('playerOneWithRock');
                $playerOne.classList.add('playerOneWithPaper');
                $paper.remove();
                $gameBoard.appendChild($rock);
                playerOne.weapon = 'Paper';
                rock.x = 6;
                rock.y = 1;
                paper.x = -6;
                paper.y = -3;
            }
                // swaps rock with scissors, only when player has rock.
        } else if (scissors.x === x && scissors.y === y) {
            if (playerOneClassList[2] === 'playerOneWithRock') {
                $playerOne.classList.remove('playerOneWithRock');
                $playerOne.classList.add('playerOneWithScissors');
                $scissors.remove();
                $gameBoard.appendChild($rock);
                playerOne.weapon = 'Scissors';
                rock.x = 6;
                rock.y = 1;
                scissors.x = -6;
                scissors.y = -5;
                // swaps paper with scissors, only when player has paper.
            } else if (playerOneClassList[2] === 'playerOneWithPaper') {
                $playerOne.classList.remove('playerOneWithPaper');
                $playerOne.classList.add('playerOneWithScissors');
                $scissors.remove();
                $gameBoard.appendChild($paper);
                playerOne.weapon = 'Scissors';
                scissors.x = -6;
                scissors.y = -5;
                paper.x = 6;
                paper.y = 3;
            }
        }
    }
};

// If player Two doesn't have a weapon, player will pick up according to grid.
const playerTwoWeapon = (x, y) => {
    // if Player Two doesn't have a weapon do the following..
    if (!doesPlayerTwoHaveWeapon()) {
        if (rock.x === x && rock.y === y) {
            $playerTwo.classList.add('playerTwoWithRock');
            $rock.remove();
            playerTwo.weapon = 'Rock';
            rock.x = -6;
            rock.y = -1;
        } else if (paper.x === x && paper.y === y) {
            $playerTwo.classList.add('playerTwoWithPaper');
            $paper.remove();
            playerTwo.weapon = 'Paper';
            paper.x = -6;
            paper.y = -3;
        } else if (scissors.x = x && scissors.y === y) {
            $playerTwo.classList.add('playerTwoWithScissors');
            $scissors.remove();
            playerTwo.weapon = 'Scissors';
            scissors.x = -6;
            scissors.y = -5;
        }
        // Otherwise, Player Two does have a weapon.
    } else if (doesPlayerTwoHaveWeapon()) {

            /* <---- WEAPON SWAP METHOD! ----> */
                /* <--- For Player Two ---> */
                // swaps scissors with rock, only if player has scissors.
        if (rock.x === x && rock.y === y) {
            if (playerTwoClassList[2] === 'playerTwoWithScissors') {
                $playerTwo.classList.remove('playerTwoWithScissors');
                $playerTwo.classList.add('playerTwoWithRock');
                $rock.remove();
                $gameBoard.appendChild($scissors);
                playerTwo.weapon = 'Rock';
                rock.x = -6;
                rock.y = -1;
                scissors.x = 6;
                scissors.y = 5;
                // swaps paper with rock, only if player has rock.
            } else if (playerTwoClassList[2] === 'playerTwoWithPaper') {
                $playerTwo.classList.remove('playerTwoWithPaper');
                $playerTwo.classList.add('playerTwoWithRock');
                $rock.remove();
                $gameBoard.appendChild($paper);
                playerTwo.weapon = 'Rock';
                rock.x = -6;
                rock.y = -1;
                paper.x = 6;
                paper.y = 3;
            }
                // swaps scissors with paper, only if player has scissors.
        } else if (paper.x === x && paper.y === y) {
            if (playerTwoClassList[2] === 'playerTwoWithScissors') {
                $playerTwo.classList.remove('playerTwoWithScissors');
                $playerTwo.classList.add('playerTwoWithPaper');
                $paper.remove();
                $gameBoard.appendChild($scissors);
                $playerTwo.weapon = 'Paper';
                paper.x = -6;
                paper.y = -3;
                scissors.x = 6;
                scissors.y = 5;
                // swaps rock with paper, only if player has rock.
            } else if (playerTwoClassList[2] === 'playerTwoWithRock') {
                $playerTwo.classList.remove('playerTwoWithRock');
                $playerTwo.classList.add('playerTwoWithPaper');
                $paper.remove();
                $gameBoard.appendChild($rock);
                playerTwo.weapon = 'Paper';
                rock.x = 6;
                rock.y = 1;
                paper.x = -6;
                paper.x = -3;
            }
                // swaps rock with scissors, only if player has rock.
        } else if (scissors.x === x && scissors.y === y) {
            if (playerTwoClassList[2] === 'playerTwoWithRock') {
                $playerTwo.classList.remove('playerTwoWithRock');
                $playerTwo.classList.add('playerTwoWithScissors');
                $scissors.remove();
                $gameBoard.appendChild($rock);
                playerTwo.weapon = 'Scissors';
                rock.x = 6;
                rock.y = 1;
                scissors.x = -6;
                scissors.y = -5;
                // swaps paper with scissors, only if player has paper.
            } else if (playerTwoClassList[2] === 'playerTwoWithPaper') {
                $playerTwo.classList.remove('playerTwoWithPaper');
                $playerTwo.classList.add('playerTwoWithScissors');
                $scissors.remove();
                $gameBoard.appendChild($paper);
                playerTwo.weapon = 'Scissors';
                paper.x = 6;
                paper.y = 3;
                scissors.x = -6;
                scissors.y = -5;
            }
        }
    }
};

// the WIN condition on the rock-paper-scissors logic
function checkWin() {
    if ($playerOne.style.left === $playerTwo.style.left && $playerOne.style.top === $playerTwo.style.top) {
        gameOver = true;
        const $winner = document.querySelector('.winner');
        if (playerOne.weapon === 'Rock' && playerTwo.weapon === 'Scissors') {
            $playerTwo.remove();
            $winner.innerHTML = 'Mario Wins!'; 
        } else if (playerOne.weapon === 'Rock' && playerTwo.weapon === 'Paper') {
            $playerOne.remove();
            $winner.innerHTML = 'Spiny Wins!'; 
        } else if (playerOne.weapon === 'Scissors' && playerTwo.weapon === 'Paper') {
            $playerTwo.remove();
            $winner.innerHTML = 'Mario Wins!';
        } else if (playerOne.weapon === 'Scissors' && playerTwo.weapon === 'Rock') {
            $playerOne.remove();
            $winner.innerHTML = 'Spiny Wins!';
        } else if (playerOne.weapon === 'Paper' && playerTwo.weapon === 'Rock') {
            $playerTwo.remove();
            $winner.innerHTML = 'Mario Wins!';
        } else if (playerOne.weapon === 'Paper' && $playerTwo.weapon === 'Scissors') {
            $playerOne.remove();
            $winner.innerHTML = 'Spiny Wins!';
        } else if (typeof(playerOne.weapon) == 'string' && typeof(playerTwo.weapon) == 'undefined') {
            $playerTwo.remove();
            $winner.innerHTML = 'Mario Wins!';
        } else if (typeof($playerOne.weapon) == 'undefined' && typeof(playerTwo.weapon) == 'string') {
            $playerOne.remove();
            $winner.innerHTML = 'Spiny Wins!';
        } else {
            $playerOne.remove();
            $playerTwo.remove();
            $winner.innerHTML = 'Both Lose!'
        }
        document.querySelector('.winnerScreen').style.zIndex = '1';
    }
}

// utilizing (x, y) coordinates from the player object, moves them accordingly in CSS with responsive styling.
const movePlayerOneTo = (x, y) => {
    if ($gameBoardWidth === 975) {
        $playerOne.style.left = (playerOne.x * 75).toString() + 'px';
        $playerOne.style.top = (playerOne.y * 75).toString() + 'px';
        playerOneWeapon(x, y);
        checkWin();
    } else {
        $playerOne.style.left = (playerOne.x * 50).toString() + 'px';
        $playerOne.style.top = (playerOne.y * 50).toString() + 'px';
        playerOneWeapon(x, y);
        checkWin();
    }
};

const movePlayerTwoTo = (x, y) => {
    if ($gameBoardWidth === 975) {
        $playerTwo.style.left = (playerTwo.x * 75).toString() + 'px';
        $playerTwo.style.top = (playerTwo.y * 75).toString() + 'px';
        playerTwoWeapon(x, y);
        checkWin();
    } else {
        $playerTwo.style.left = (playerTwo.x * 50).toString() + 'px';
        $playerTwo.style.top = (playerTwo.y * 50).toString() + 'px';
        playerTwoWeapon(x, y);
        checkWin();
    }
};

// characters movement on the grid depending on the keyCode.
// FOR PLAYER 1 'MARIO'.
movePlayerOneUp = () => {
    if (canMoveTo(playerOne.x, playerOne.y - 1)) {
        playerOne.y -= 1;
        movePlayerOneTo(playerOne.x, playerOne.y);
    }
};

movePlayerOneDown = () => {
    if (canMoveTo(playerOne.x, playerOne.y + 1)) {
        playerOne.y += 1;
        movePlayerOneTo(playerOne.x, playerOne.y);
    }
};

movePlayerOneLeft = () => {
    if (canMoveTo(playerOne.x -1, playerOne.y)) {
        playerOne.x -= 1;
        movePlayerOneTo(playerOne.x, playerOne.y);
    }
};

movePlayerOneRight = () => {
    if (canMoveTo(playerOne.x + 1, playerOne.y)) {
        playerOne.x += 1;
        movePlayerOneTo(playerOne.x, playerOne.y);
    }
};

// FOR PLAYER 2 'SPINY'.
movePlayerTwoUp = () => {
    if (canMoveTo(playerTwo.x, playerTwo.y - 1)) {
        playerTwo.y -= 1;
        movePlayerTwoTo(playerTwo.x, playerTwo.y);
    }
};

movePlayerTwoDown = () => {
    if (canMoveTo(playerTwo.x, playerTwo.y + 1)) {
        playerTwo.y += 1;
        movePlayerTwoTo(playerTwo.x, playerTwo.y);
    }
};

movePlayerTwoLeft = () => {
    if (canMoveTo(playerTwo.x - 1, playerTwo.y)) {
        playerTwo.x -= 1;
        movePlayerTwoTo(playerTwo.x, playerTwo.y);
    }
};

movePlayerTwoRight = () => {
    if (canMoveTo(playerTwo.x + 1, playerTwo.y)) {
        playerTwo.x += 1;
        movePlayerTwoTo(playerTwo.x, playerTwo.y);
    }
};

// KeyboardEvent keyCode Property
document.body.addEventListener('keydown', action => {
    const keyCode = action.keyCode;
    if ([37, 38, 39, 40, 65, 68, 83, 87].includes(keyCode)) {
        action.preventDefault();
    }
    if (gameOver) return;

    switch (keyCode) {
        case 37:
            movePlayerTwoLeft();
            break;

        case 38:
            movePlayerTwoUp();
            break;

        case 39:
            movePlayerTwoRight();
            break;

        case 40:
            movePlayerTwoDown();
            break;

        case 65:
            movePlayerOneLeft();
            break;

        case 68:
            movePlayerOneRight();
            break;

        case 83:
            movePlayerOneDown();
            break;

        case 87:
            movePlayerOneUp();
            break;
    }
});

// landign modal load function 
const landingModal = document.body.querySelector('.landingModal');
landingModal.onclick = function() {
landingModal.style.display = 'none';
gameOver = false;
};

// Play again function
const resetPlay = document.querySelector('#resetPlay');
resetPlay.onclick = function() {
    location.reload();
};


// Recources - W3 School; MDN; YouTube; Blerf game scenario

/* Bugs to work on:
1) Spiny grabs scissors before getting close to the object;
2) win states not always accurate;
3) swap method isn't working for Spiny between Paper and Scissors and Rock and Scissors;
4) none of swap methods work for Mario;
*/ 

// <------ Implement "swap" method for characters to be able to switch 'weapons ------>


// <------ Implement "collision detection" method for Win/Lose state ----->


// <------ Another Modal to announce which Player won. And "Play again" button ----->


// <------ Creat eventListeners for key controls/press for both characters ------>


// <----- Implement a function for character movements within the game grid ----->


// <----- Implement "Players Score board" ----->
// <----- Implement "Players remaining Health left Bar" ----->
// <----- Implement "GO to home page" button and function ---->
// <----- Bonus:: add sound audio for certain movements and actions ----->
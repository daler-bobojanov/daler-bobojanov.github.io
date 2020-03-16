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

// checks if the provided coordinate/movement is within the gameBoard's bounds. Returns a Boolean.
// code implementation was referred from 'Blerf' game @https://wakeful-baritone.glitch.me/

const isCoordinateInGrid = (x, y) => {
    if(x < 0 || y < 0 || x > 12 || y > 6){
        return false;
    }
        return true;
} 

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
    } else if (doesPlayerOneHaveWeapon()) {
        // WEAPON SWAP METHOD!
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
            }
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
        } else if (playerOneClassList[2] === 'playerWithRock') {
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
        if (playerOneClassList[2] === 'playerWithRock') {
            $playerOne.classList.remove('playerWithRock');
            $playerOne.classList.add('playerOneWithScissors');
            $scissors.remove();
            $gameBoard.appendChild($rock);
            playerOne.weapon = 'Scissors';
            rock.x = 6;
            rock.y = 1;
            scissors.x = -6;
            scissors.y = -5;
        }
    }

}







// <------ Implement "swap" method for characters to be able to switch 'weapons ------>


// <------ Implement "collision detection" method for Win/Lose state ----->


// <------ Another Modal to announce which Player won. And "Play again" button ----->


// <------ Creat eventListeners for key controls/press for both characters ------>


// <----- Implement a function for character movements within the game grid ----->


// <----- Implement "Players Score board" ----->
// <----- Implement "Players remaining Health left Bar" ----->
// <----- Implement "GO to home page" button and function ---->
// <----- Bonus:: add sound audio for certain movements and actions ----->
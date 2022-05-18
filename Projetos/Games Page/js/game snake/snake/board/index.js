export const gameboard = document.getElementById('game-board');

const boardSize = 21;

export function generateRandomBoardPosition (){
    return {
        x: Math.floor(Math.random() * boardSize) +1,
        y: Math.floor(Math.random() * boardSize) +1,
    }
}

export function isOutSideBoard(position){
    return position.x > boardSize || position.x <1 ||
            position.y > boardSize || position.y <1
}

//game board
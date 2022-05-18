import { gameboard } from './board/index.js'
import { getInputDirection } from './input.js'

export const snakeSpeed = 12;

let  newSegment = 0;

const snakeBody = [
    {x:11 , y:11},
]

export function update(){
    addSegment();

    for (let i = snakeBody.length -2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i] }
    };

    const inputDirection = getInputDirection();
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

export function draw(){

    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        gameboard.appendChild(snakeElement);
    })
};

export function collision(position) {
    return snakeBody.some(segment => {
        return position.x === segment.x && position.y === segment.y;
    })
}

export function expandSnake(amount){
    newSegment += amount;
}

function addSegment(){
    if(newSegment > 0){
        snakeBody.push({
            ...snakeBody[snakeBody.length -1]
        });

        newSegment -= 1;
    }
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function hasSelfcollision(){
    const snakeHead = snakeBody[0];

    return snakeBody.some((segment, index) => {
        if (index === 0) return false;

        return snakeHead.x === segment.x && snakeHead.y === segment.y;
    });
}
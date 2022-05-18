import { gameboard, generateRandomBoardPosition} from '../board/index.js'
import { collision as snakeCollision, expandSnake } from '../index.js'

const expansionRate = 2;

let foodPosition = generateRandomPosition();

export function update() {
    if (snakeCollision(foodPosition)) {
        expandSnake(expansionRate)
      foodPosition = generateRandomPosition();
    }
  };

export function draw (){
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

    gameboard.appendChild(foodElement);
}

function generateRandomPosition() {
    let newFoodPosition;

    while (newFoodPosition === undefined || snakeCollision(newFoodPosition)) {
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;
}
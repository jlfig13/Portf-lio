import { snakeSpeed, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfcollision as hasSnakeSelfCollision } from './game snake/snake/index.js';
import { isOutSideBoard, gameboard } from './game snake/snake/board/index.js';
import { draw as foodDraw, update as foodUpdate } from './game snake/snake/food/index.js';

//Velocidade da cobra

//tempo de inicialização
let lastTimeRender = 0;

function main(currentTime) {

    if (checkGameOver()) {
        if(confirm('Você perdeu!')){
            window.location.reload();
        } else {
            window.requestAnimationFrame(main);
        }

        return;
    }

    window.requestAnimationFrame(main)
//looping
    const secondSinceLastRender = (currentTime - lastTimeRender) / 1000;
// a constante secondSinceLastRender é = o tempo corrido - a ultima renderização / 1000, transformando o tempo em segundos.
    if (secondSinceLastRender < 1 / snakeSpeed)
    return;
// se a ultima renderização for menor que 1/ a velocidade da cobra retorna, em looping.
    lastTimeRender = currentTime;
// a ultima renderização é igual o tempo corrido.

    update();

    draw();
}

function update() {
    gameboard.innerHTML = '';
    snakeUpdate();
    foodUpdate();
};
function draw() {  
    snakeDraw();
    foodDraw();
};
  
function checkGameOver(){
    return (isOutSideBoard(getSnakeHead()) || hasSnakeSelfCollision())
}

//a criação de um looping de tempo dentro da função main foi dada no caso em que a função puxa o currentTime que sai em milisegundos que em seguida puxa a propria main em looping, dando o decorrer da partida do jogo.

window.requestAnimationFrame(main);
//windows.requestAnimetionFrame ele chama um callback,sendo ela função main que vai ser a função principal, essa função vai conter o maior possivel de informações para a elaboração das regras.


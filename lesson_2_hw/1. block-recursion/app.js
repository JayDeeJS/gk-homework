//Задание 1
/*
используя setTimeout и рекурсию заставить блок
дигаться по определенному шаблону
(как было показано на уроке)
*/

//Код решения

const triangle = document.querySelector(".triangle");

let posX = 0;
let posY = 0;

const handleTriangleMove = () => {
    if (posX <= 510 && posY <= 90) {
        posX += 10;
        posY += 2;
        triangle.style.left = `${posX}px`;
        triangle.style.top = `${posY}px`;
        handleTimer();
    } else if (posX >= 0 && posY <= 200) {
        posX -= 10;
        posY += 2;
        triangle.style.left = `${posX}px`;
        triangle.style.top = `${posY}px`;
        handleTimer();
    } else if (posY <= 200 && posY >= 0) {
        posY = -10;
        triangle.style.top = `${posY}px`;
        handleTimer();
    }
}

const handleTimer = () => {
    setTimeout(handleTriangleMove, 10);
}

handleTriangleMove();
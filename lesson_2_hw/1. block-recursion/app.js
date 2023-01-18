const triangle = document.querySelector(".triangle");

let posX = 0;
let posY = 0;

const handleTriangleMove = () => {
    if (posX <= 500 && posY <= 100) {
        posX += 10;
        posY += 2;
        triangle.style.left = `${posX}px`;
        triangle.style.top = `${posY}px`;
        handleTimer();
    } else if (posX >= 0 && posY <= 210) {
        posX -= 10;
        posY += 2;
        triangle.style.left = `${posX}px`;
        triangle.style.top = `${posY}px`;
        handleTimer();
    } else if (posY >= 0) {
        posY -= 200;
        triangle.style.top = `${posY}px`;
        handleTimer();
    }
}

const handleTimer = () => {
    setTimeout(handleTriangleMove, 10);
}

handleTriangleMove();
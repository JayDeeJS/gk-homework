const triangle = document.querySelector(".triangle");

let posX = 0;
let posY = 0;

const handleTriangleMove = () => {
    if (posX <= 500 && posY <= 100) {
        posX += 10;
        posY += 2;
        triangle.style.left = `${posX}px`;
        triangle.style.top = `${posY}px`;
        setTimeout(handleTriangleMove, 10);
    } else if (posX >= 0 && posY <= 220) {
        posX -= 10;
        posY += 2;
        triangle.style.left = `${posX}px`;
        triangle.style.top = `${posY}px`;
        setTimeout(handleTriangleMove, 10);
    } else if (posY >= 0) {
        posY -= 200;
        triangle.style.bottom = `${posY}px`;
        setTimeout(handleTriangleMove, 10);
    }
}

handleTriangleMove();
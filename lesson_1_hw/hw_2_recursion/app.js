//Задание 2
/*
используя рекурсию необходимо заставить блок двигаться по странице.
Создайте один большой блок и один маленький внутри него.
Задайте большому блоку position: relative, а малому absolute.
Используя addEventListener изменяйте параметр позиции малого блока
(.style.left=`${переменная}px`). 
*/

//Код решения
const square = document.querySelector('.square');
const container = document.querySelector('.container');
let unit = 0;

const moveSquare = () => {
    unit += 30;
    console.log(unit)
    if(unit <= 1110){
        square.style.left=`${unit}px`;
        moveSquare();
    }
}

window.addEventListener('load', moveSquare);
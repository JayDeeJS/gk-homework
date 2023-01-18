const appendSeconds = document.querySelector(".timer__count");

let seconds = 60;
let interval;
const initialSeconds = 60;

function handleCountdown() {
    seconds-- && (appendSeconds.innerHTML = seconds)
    if (seconds === 0) {
        clearInterval(interval);
        appendSeconds.innerHTML = `Прошло ${initialSeconds} секунд!`
    }
}

window.addEventListener('load', () => {
    interval = setInterval(handleCountdown, 1000);
});
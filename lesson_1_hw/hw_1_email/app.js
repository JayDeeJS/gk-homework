//Задание 1
/*
Используя регулярные выражения необходимо сделать поле для ввода эл почты и пароля
@ && .ru && .com && .info && <= 25
4-20 && aA-zZ && 0-9 && hidden (show)
*/

//Код решения
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".login");
const displayMessage = document.querySelector(".display");

const emailRegExp = /^[\w][\@][a-z]|.com|.ru|.info$/;
const passwordRegExp = /^\w{4,20}$/;

loginButton.addEventListener('click', () => {
    if (emailRegExp.test(emailInput.value) && passwordRegExp.test(passwordInput.value)) {
        return (displayMessage.textContent = "Email and password are valid") && (displayMessage.style.color = "limegreen");
    } else if (!emailRegExp.test(emailInput.value) && !passwordRegExp.test(passwordInput.value)) {
        return (displayMessage.textContent = "Email and password are invalid") && (displayMessage.style.color = "orangered");
    } else if (!emailRegExp.test(emailInput.value) && passwordRegExp.test(passwordInput.value)) {
        return (displayMessage.textContent = "Password is ok, but email is invalid") && (displayMessage.style.color = "orangered");
    } else if (emailRegExp.test(emailInput.value) && !passwordRegExp.test(passwordInput.value)) {
        return (displayMessage.textContent = "Email is fine, but password is invalid") && (displayMessage.style.color = "orangered");
    }
});
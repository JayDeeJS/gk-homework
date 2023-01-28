/*
добавить 3ю валюту в конвертор
*/

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (elemKGS, targetUSD, targetEUR) => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response);

        const clearInputs = (input1, input2) => {
            if (elemKGS.value === "" || targetUSD.value === "" || targetEUR.value === "") {
                input1.value = "";
                input2.value = "";
            }
        }

        elemKGS.oninput = () => {
            targetUSD.value = (elemKGS.value / data.KGSToUSD).toFixed(2);
            targetEUR.value = (elemKGS.value / data.KGSToEUR).toFixed(2);
            clearInputs(targetUSD, targetEUR);
        }
        targetUSD.oninput = () => {
            elemKGS.value = (targetUSD.value * data.KGSToUSD).toFixed(2);
            targetEUR.value = (targetUSD.value * data.EURToUSD).toFixed(2);
            clearInputs(elemKGS, targetEUR);
        }
        targetEUR.oninput = () => {
            elemKGS.value = (targetEUR.value * data.KGSToEUR).toFixed(2);
            targetUSD.value = (targetEUR.value / data.EURToUSD).toFixed(2);
            clearInputs(elemKGS, targetUSD);
        }
    })
}

convert(som, usd, eur);
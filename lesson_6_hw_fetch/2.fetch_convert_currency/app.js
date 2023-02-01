/*
добавить 3ю валюту в конвертор
метод FETCH
*/

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (elemKGS, targetUSD, targetEUR) => {
    const clearInputs = (input1, input2) => {
        if (elemKGS.value === "" || targetUSD.value === "" || targetEUR.value === "") {
            input1.value = "";
            input2.value = "";
        }
    }

    fetch("data.json")
        .then(response => response.json())
        .then(json => {
            elemKGS.oninput = () => {
                targetUSD.value = (elemKGS.value / json.KGSToUSD).toFixed(2);
                targetEUR.value = (elemKGS.value / json.KGSToEUR).toFixed(2);
                clearInputs(targetUSD, targetEUR);
            }
            targetUSD.oninput = () => {
                elemKGS.value = (targetUSD.value * json.KGSToUSD).toFixed(2);
                targetEUR.value = (targetUSD.value * json.EURToUSD).toFixed(2);
                clearInputs(elemKGS, targetEUR);
            }
            targetEUR.oninput = () => {
                elemKGS.value = (targetEUR.value * json.KGSToEUR).toFixed(2);
                targetUSD.value = (targetEUR.value / json.EURToUSD).toFixed(2);
                clearInputs(elemKGS, targetUSD);
            }
        })
        .catch(() => console.error("error in fetching json"))
        .finally(() => console.log("json fetched"))
}

convert(som, usd, eur);
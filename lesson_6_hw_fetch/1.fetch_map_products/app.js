/*
создать json файл и заполнить его массивом объектов.
Каждый объект должен содержать цену, название товара
и путь к изображению
 
написать GET запрос при помощи FETCH и получить
этот массив объектов

При помощи метода map показать на экране все продукты
*/

const wrapper = document.querySelector(".wrapper");

window.addEventListener('load', () => {
    fetch("data.json")
        .then(response => response.json())
        .then(json => {
            wrapper.style.height = "350px";
            wrapper.style.width = "1200px";
            wrapper.style.display = "flex";
            wrapper.style.justifyContent = "space-evenly";
            wrapper.style.margin = "30px auto";
    
            json.map((item) => {
                const block = document.createElement('div');
                const imgCell = document.createElement('img');
                const priceCell = document.createElement('p');
                const titleCell = document.createElement('h4');
                
                block.style.height = "100%";
                block.style.width = "20%";
                block.style.outline = "1px solid blue";
                block.style.display = "flex";
                block.style.flexDirection = "column";
                block.style.justifyContent = "space-evenly";
                block.style.alignItems = "flex-start";
                block.style.padding = "10px";
                block.style.borderRadius = "20px";
                wrapper.append(block);
        
                imgCell.style.height = "50%";
                imgCell.style.width = "100%";
                imgCell.style.objectFit = "contain";
                imgCell.src = item.url;
                block.append(imgCell);
        
                priceCell.innerHTML = item.price;
                priceCell.style.fontWeight = "700";
                block.append(priceCell);
        
                titleCell.innerHTML = item.name;
                titleCell.style.color = "green";
                block.append(titleCell)
            })
        })
        .catch(() => console.error("error in displaying data"))
        .finally(() => console.log("data fetched"))
})
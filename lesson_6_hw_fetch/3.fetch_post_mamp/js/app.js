const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

console.log("tabs", tabs);
console.log("tabsParent", tabsParent);
console.log("tabsContent", tabsContent);

let sec = -1;

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none";
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    })
}
hideTabContent();

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
}
showTabContent();

tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})

let interval = setInterval(handleSlide, 1000);

//слайдер
function handleSlide() {
    sec++;
    tabs.forEach((item, idx) => {
        console.log("sec", sec);
        hideTabContent();
        showTabContent(idx = sec);
        tabs.forEach((item, idx) => {
            item.classList.add("tabheader__item_disabled");
        })
        tabsContent.forEach((item,idx) => {
            item.classList.add("tabcontent__animated");
        })
    })
    if (sec === 3) {
        clearInterval(interval);
        let sec = -1;
        console.log(sec);
    }
}


const modalTrigger = document.querySelector(".btn_white");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
}

modalTrigger.addEventListener('click', openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        closeModal();
    }
})


//Открытие модального окошка при скроллинге до конца страницы

const html = document.querySelector("#html");
const scroll = document.querySelector("#scroll");

window.addEventListener('scroll', () => {
    html.scrollTop;
    scroll.innerText = `${html.scrollTop}`;
    (html.scrollTop >= 3567) ? openModal() : false;
});


/*
Скачать Mamp https://www.mamp.info/en/windows/ и попробовать
запустить свой сервер и написать POST запрос,
и выводить на экран сообщения об успехе запроса
(метод FETCH)
*/

//POST запрос FETCH + модальное сообщение
const forms = document.querySelectorAll("form");
const modalForm = document.querySelector("#modal__content-form");
const popup = document.createElement("div");
const popupFrame = document.createElement("div");
const popupText = document.createElement("p");

popup.style.position = "absolute";
popup.style.top = "92px";
popup.style.left = "124px";
popup.style.width = "250px";
popup.style.height = "150px";
popup.style.borderRadius = "20px";
popup.style.display = "none";
popup.style.animation = "fade 1.7s linear";

popupFrame.style.width = "50%";
popupFrame.style.height = "100%";
popupFrame.style.margin = "0 auto";
popupFrame.style.display = "flex";
popupFrame.style.justifyContent = "center";
popupFrame.style.alignItems = "center";

modalForm.append(popup);
popup.append(popupFrame);
popupFrame.append(popupText);

const messages = {
    load: "Идет загрузка...",
    success: "Данные успешно отправлены на сервер!",
    error: "Ошибочка! Данные не были отправлены :("
}

const postData = (url, data) => {
    const req = fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: data
    })
    return req;
}

const bindPostData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const showPopupText = (display, bgColor, innerText) => {
            popup.style.display = display;
            popup.style.backgroundColor = bgColor;
            popupText.innerText = innerText;
            setTimeout(() => popup.style.display = "none", 3500);
        }

        showPopupText("block", "lightgray", messages.load);

        const formData = new FormData(form);

        const object = {};

        formData.forEach((item, name) => {
            object[name] = item;
        })
        const json = JSON.stringify(object);

        postData("server.php", json)
        .then((response) => response.status)
        .then((data) => {
            if (data === 200) {
                showPopupText("block", "#54ed39", messages.success);
            } else {
                showPopupText("block", "orange", messages.error);
            }
        })
        .catch(() => {
            console.error("error in data");
            showPopupText("block", "orange", messages.error);
        })
        .finally(() => console.log("data fetched"))
    })
}

forms.forEach((item) => {
    bindPostData(item);
});
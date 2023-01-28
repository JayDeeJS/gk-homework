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
*/

//POST запрос + модальное окошко
const forms = document.querySelectorAll("form");
const popup = document.querySelector(".popup");
const popupFrame = document.querySelector(".popup__frame");
const popupText = document.querySelector(".popup__text");

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

const postData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader("Content-type", "application/json");

        const formData = new FormData(form);
        console.log(formData);

        const object = {};

        formData.forEach((item, name) => {
            object[name] = item;
        })

        console.log(object);

        const json = JSON.stringify(object);
        request.send(json);

        const showPopupText = () => {
            setTimeout(() => {
                popup.style.display = "none";
            }, 3500);
        }
        
        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log("ok");
                popup.style.display = "block";
                popup.style.backgroundColor = "#54ed39";
                popupText.innerText = "Данные успешно отправлены на сервер!";
                showPopupText();
            } else {
                console.log("not ok");
                popup.style.display = "block";
                popup.style.backgroundColor = "orange";
                popupText.innerText = "Ошибочка! Данные не были отправлены.";
                showPopupText();
            }
        })
    })
}

forms.forEach((item) => {
    postData(item);
});


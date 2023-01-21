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
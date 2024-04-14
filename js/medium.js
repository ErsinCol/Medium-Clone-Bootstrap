const heroEl = document.getElementById("hero");
const navbarEl = document.getElementById("navbar");
const getStartedBtnEl = document.getElementById("getStartedBtn");

function handleScroll(){
    const y = window.scrollY;
    const heroHeight = heroEl.getBoundingClientRect().height;

    if(y > heroHeight - 70){
        navbarEl.style.backgroundColor = "rgb(255, 255, 255)";
        getStartedBtnEl.classList.remove("btn-dark");
        getStartedBtnEl.classList.add("btn-success");
    }else {
        navbarEl.style.backgroundColor = "#FFC017";
        getStartedBtnEl.classList.remove("btn-success");
        getStartedBtnEl.classList.add("btn-dark");
    }
}

window.onscroll = handleScroll;
const navbutton = document.querySelector('.navdisplay');
const overflow = document.querySelector('.showoverflow');
const bgcol = document.querySelector('.empty');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
    bgcol.classList.toggle('bgcolor');
    overflow.classList.toggle('hideoverflow');
});

const loginbutton = document.querySelector('.innerboundarybutton');
const registerbutton = document.querySelector('.innerboundaryregister');
const loginflipcard = document.querySelector('.loginform');
const registerflipcard = document.querySelector('.registerform');
const loginclosebutton = document.querySelector('.closebutton');
const registerclosebutton = document.querySelector('.registerclosebutton');
const continuebutton = document.querySelector('.continue');
const formcontinue = document.querySelector('.first');
const form2continue = document.querySelector('.second');

loginbutton.addEventListener("click", () => {
    loginbutton.classList.toggle('emptyclass');
    loginflipcard.classList.toggle('rotate');
});

registerbutton.addEventListener("click", () => {
    registerbutton.classList.toggle('emptyclass');
    registerflipcard.classList.toggle('rotate');
});

loginclosebutton.addEventListener("click", () => {
    loginbutton.click();
});

registerclosebutton.addEventListener("click", () => {
    registerbutton.click();
});

continuebutton.addEventListener("click", () => {
    formcontinue.classList.toggle('second');
    form2continue.classList.toggle('second');
    continuebutton.classList.toggle('back')
});

var mq = window.matchMedia("(max-width: 766px)");
if (mq.matches) {
    function navhide() {
        navbutton.click();
    }
}

window.onscroll = function() {
    scrollfunction();
}

var header = document.getElementById("header");
const nav = document.querySelector('.nav');
const navbutton2 = document.getElementById('navbutton');

function scrollfunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "#310e55";
        navbutton2.className = 'navdisplaybg';
        nav.className = 'navlater';
    } else {
        header.style.backgroundColor = "rgba(0,0,0,0)";
        navbutton2.className = 'navdisplay';
        nav.className = 'nav';
    }
}

var links = document.getElementsByClassName('butt');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var active = document.getElementsByClassName('nav-a');
        active[0].className = active[0].className.replace(" nav-a", "");
        this.className += " nav-a";
    });
}
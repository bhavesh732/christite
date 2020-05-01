const navbutton = document.querySelector('.navdisplay');
// const mainbody = document.querySelector('.mainbodynomarg');
// const navwidth = document.querySelector('.margright');
// const headerlogomarg = document.querySelector('.headerlogo');
const navdisplay = document.querySelector('.navbefore');
// const buttonwidth = document.querySelector('.nowidthbutton');
const ul = document.querySelector('.ul');
const overflow = document.querySelector('.showoverflow');
const bgcol = document.querySelector('.empty');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
    // navwidth.classList.toggle('fullwidth');
    // headerlogomarg.classList.toggle('headerlogomarg');
    ul.classList.toggle('displayul');
    bgcol.classList.toggle('bgcolor');
    // buttonwidth.classList.toggle('fullwidthbutton');
    overflow.classList.toggle('hideoverflow');
    navdisplay.classList.toggle('navbeforedisplay');
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

function navhide() {
    navbutton.click();
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
        nav.className = 'navlater';
        navbutton2.className = 'navdisplaybg';
    } else {
        header.style.backgroundColor = "rgba(0,0,0,0)";
        nav.className = 'nav';
        navbutton2.className = 'navdisplay';
    }
}
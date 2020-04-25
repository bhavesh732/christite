const navbutton = document.querySelector('.navdisplay');
const mainbody = document.querySelector('.mainbodynomarg');
const navwidth = document.querySelector('.margright');
const headerlogomarg = document.querySelector('.headerlogo');
const buttonwidth = document.querySelector('.nowidthbutton');
const ul = document.querySelector('.hiddenul');
const overflow = document.querySelector('.showoverflow');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
    mainbody.classList.toggle('mainbody');
    navwidth.classList.toggle('fullwidth');
    headerlogomarg.classList.toggle('headerlogomarg');
    ul.classList.toggle('visibleul');
    buttonwidth.classList.toggle('fullwidthbutton');
    overflow.classList.toggle('hideoverflow');
});

const loginbutton = document.querySelector('.innerboundarybutton');
const registerbutton = document.querySelector('.innerboundaryregister');
const loginflipcard = document.querySelector('.loginform');
const registerflipcard = document.querySelector('.registerform');
const loginclosebutton = document.querySelector('.closebutton');
const registerclosebutton = document.querySelector('.registerclosebutton');

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
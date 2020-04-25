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
const flipcard = document.querySelector('.flip-card-inner');

loginbutton.addEventListener("click", () => {
    loginbutton.classList.toggle('closebutton');
    flipcard.classList.toggle('rotate');
});
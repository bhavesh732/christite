const navbutton = document.querySelector('.navdisplay');
const mainbody = document.querySelector('.mainbodynomarg');
const navwidth = document.querySelector('.margright');
const headerlogomarg = document.querySelector('.headerlogo');
const buttonwidth = document.querySelector('.nowidthbutton');
const overflow = document.querySelector('.showoverflow');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
    mainbody.classList.toggle('mainbody');
    navwidth.classList.toggle('fullwidth');
    headerlogomarg.classList.toggle('headerlogomarg');
    buttonwidth.classList.toggle('fullwidthbutton');
    overflow.classList.toggle('hideoverflow');
});
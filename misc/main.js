function loginattempt(username, password, captcha) {
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
    document.getElementById('captchaBox').value = captcha;
    var captchasrc = document.getElementById('captcha_img').src;
    document.getElementById('Login').click();
    window.alert(captchasrc);
}
loginattempt('1841108', '14349959', 'captcha value');


//this code is qworking...continue

// zebra = document.getElementsByClassName('ZebraDialogOverlay');
// if (zebra != NULL) {
//     errormessagealert = document.getElementsByClassName('ZebraDialog_Title').textcontent;
//     errormessagemain = document.getElementsByClassName('ZebraDialog_Information').textcontent;
//     errormessageHide = document.getElementsByClassName('ZebraDialog_Button_0');
//     window.alert(errormessagealert + errormessagemain);
//     errormessageHide.click();
//     loginattempt('1841108', '14349959', 'captcha value');
// } else {
// loginattempt('1841108', '14349959', 'captcha value');
// }


//write a function to return captcha image url
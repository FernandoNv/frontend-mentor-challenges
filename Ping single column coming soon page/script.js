const msg_error = document.querySelector('.msg-error');
const form = document.querySelector('.form');
const email = document.querySelector('#email');


form.addEventListener('submit', e => {
    e.preventDefault();
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regexEmail.test(email.value)){
        msg_error.classList.add('display-block');
        email.classList.add('red-border');
        email.classList.remove('green-border');
    }else{
        msg_error.classList.remove('display-block');
        email.classList.remove('red-border');
        email.classList.add('green-border');
    }
});
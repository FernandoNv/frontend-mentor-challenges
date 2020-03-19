const text_error = document.querySelector('.text-error');
const icon_error = document.querySelector('.icon-error');
const form = document.querySelector('form');
const email = document.querySelector('#email');


form.addEventListener('submit', e => {
    e.preventDefault();
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regexEmail.test(email.value)){
        text_error.classList.add('opacity-1');
        icon_error.classList.add('opacity-1');
        email.classList.add('red-border');
        email.classList.remove('valid-email');
    }else{
        text_error.classList.remove('opacity-1');
        icon_error.classList.remove('opacity-1');
        email.classList.remove('red-border');
        email.classList.add('valid-email');
    }
});
const inputs = document.querySelectorAll('input');
const button = document.querySelector('#btn-submit');
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const addClassError = (input) => {
    const icon_error = input.nextElementSibling;
    const text_error = icon_error.nextElementSibling;
    
    text_error.classList.add('opacity-1');
    icon_error.classList.add('opacity-1');
    input.classList.add('red-border');
    input.classList.remove('valid-email');
}

const removeClassError = (input) => {
    const icon_error = input.nextElementSibling;
    const text_error = icon_error.nextElementSibling;
    
    text_error.classList.remove('opacity-1');
    icon_error.classList.remove('opacity-1');
    input.classList.remove('red-border');
    input.classList.add('valid-email');
}


button.addEventListener('click', e => {
    e.preventDefault();
    inputs.forEach(input => {
        if(input.name === 'email'){
            if(!regexEmail.test(input.value)){
                addClassError(input);
            }else{
                removeClassError(input);
            }
        }else{
            if(input.value === ''){
                addClassError(input);
            }else{
                removeClassError(input);
            }
        }
    });
});

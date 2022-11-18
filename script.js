let errors = [];
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-comfirm');

function checkValidity(input){
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
} 

function validateEmail (email){
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (email.value.match(mailFormat)){
        // return true;
    }
    else {
        errors.push('Ваш адрес электронной почты введен неверно');
        // return false;
    }
}

function validatePassword (password){
    let passwordFormat = /^[a-z0-9_-]{8,16}$/;

    if (password.value.match(passwordFormat)){
        // return true;
    }
    else {
        errors.push('Ваш пароль некорректен');
        // return false;
    }
}

function validatePasswordConfirm (passwordConfirm){
    if (passwordConfirm.value === password.value){
        // return true;
    }
    else {
        errors.push('Ваш пароли не совпали');
        // return false;
    }
}

const clearInput = (inputs) => {
    inputs.value = '';
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    validateEmail (email);
    validatePassword (password);
    validatePasswordConfirm (passwordConfirm);

    document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
    clearInput(inputs);
}
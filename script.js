let errors = [];
const firstName = document.querySelector('#first-name');
console.log(firstName);

function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
} 

function checkAll() {
    const val = firstName.validity.valueMissing;
    const mean = firstName.value;
    console.log(val);
    console.log(mean);

    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
}






// function validateEmail (email){
//     let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//     if (email.value.match(mailFormat)){
//         return true;
//     }
//     else {
//         errors.push('Ваш адрес электронной почты введен неверно');
//         return false;
//     }
// }

// valueMissing
// badInput
// customError
// patternMismatch
// rangeOverflow
// rangeUnderflow
// stepMismatch
// tooLong
// tooShort
// typeMismatch
// valid

// if (validity.rangeOverflow) {
//     let max = getAttributeValue(input,'max');
//     errors.push('Максимальное значение не может быть больше чем ' + max);
// }
// if (validity.rangeUnderflow) {
//     let min = getAttributeValue(input,'min');
//     errors.push('Минимальное значение не может быть больше чем ' + min);
// }


// const firstName = document.querySelector('#first-name');
// const lastName = document.querySelector('#last-name');
// const login = document.querySelector('#login');
// const password = document.querySelector('#password');
// const passwordConfirm = document.querySelector('#password-comfirm');
// const email = document.querySelector('#email');
// const submit = document.querySelector('#btn-submit');

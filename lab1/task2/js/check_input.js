function checkInput(inputId) {
    let string = document.getElementById(inputId).value;
    if (string === '') {
        alert('Не все поля заполнены');
        throw 'Не все поля заполнены';
    }
}

function register() {
    checkInput('regLogin');
    checkInput('regPassword');
    checkInput('regLastName');
    checkInput('regFirstName');
    checkInput('regPatronymic');
    checkInput('regPhoneNumber');
    window.location.href='home.html';
}

function authorize() {
    checkInput('login');
    checkInput('password');
    window.location.href='home.html';
}

function add() {
    checkInput('header');
    checkInput('city');
    checkInput('address');
    checkInput('underground');
    checkInput('square');
    checkInput('rooms');
    checkInput('cost');
    window.location.href='home.html';
}

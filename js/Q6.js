//document add event listener

document.addEventListener('DOMContentLoaded', function () {

    //Content
    const form = document.getElementById('frmPerson');
    const nameInput = document.getElementById('FullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confPasswordInput = document.getElementById('confpassword');


    //error message
    const nameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confPasswordError = document.getElementById('confPasswordError');



    const button = document.getElementById('btn');


    //validation functions
    function nameValidator() {
        let inputtxt = nameInput.value;
        let name = /^[a-zA-Z ]+$/;
        if (!inputtxt.match(name)) {
            nameError.textContent = 'Name should contain only alphabets!';
            nameInput.style.border = '5px solid';
            nameInput.style.borderColor = 'red';
            nameError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            nameInput.style.border = '';
            nameInput.style.borderColor = '';
            button.style.border = '';
        }
    }

    function phoneValidator() {
        let inputtxt = phoneInput.value;
        let phoneno = /^\d{10}$/;
        if (!inputtxt.match(phoneno)) {
            phoneError.textContent = 'Please enter a valid phone number!';
            phoneInput.style.border = '5px solid';
            phoneInput.style.borderColor = 'red';
            phoneError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            phoneInput.style.border = '';
            phoneInput.style.borderColor = '';
            button.style.border = '';
        }
    }


    function emailValidator() {
        var emailVal = emailInput.value;
        var atposition = emailVal.indexOf("@");
        var dotposition = emailVal.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailVal.length) {
            emailError.textContent = 'Please enter a valid e-mail address!';
            emailInput.style.border = '5px solid';
            emailInput.style.borderColor = 'red';
            emailError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            emailInput.style.border = '';
            emailInput.style.borderColor = '';
            button.style.border = '';
        }
    }

    function passwordValidator() {
        var password = passwordInput.value;
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long!";
            passwordInput.style.border = '5px solid';
            passwordInput.style.borderColor = 'red';
            passwordError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            passwordInput.style.border = '';
            passwordInput.style.borderColor = '';
            button.style.border = '';
        }
    }

    function confirmPasswordValidator() {
        var firstpassword = passwordInput.value;
        var secondpassword = confPasswordInput.value;

        if (firstpassword != secondpassword) {
            confPasswordError.textContent = 'Password must be same as the previous one!';
            confPasswordInput.style.border = '5px solid';
            confPasswordInput.style.borderColor = 'red';
            confPasswordError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            confPasswordInput.style.border = '';
            confPasswordInput.style.borderColor = '';
            button.style.border = '';
        }
    }

    //form addEventListener
    form.addEventListener('submit', function (event) {

        //prevent form submission
        event.preventDefault();

        //validation - fullName
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Enter full name.';
            nameInput.style.border = '5px solid';
            nameInput.style.borderColor = 'red';
            nameError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            nameError.textContent = '';
            nameValidator();
        }

        //validation - email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Enter your email address';
            emailInput.style.border = '5px solid';
            emailInput.style.borderColor = 'red';
            emailError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            emailError.textContent = '';
            emailValidator();
        }


        //validation - phone
        if (!phoneInput.value.trim()) {
            phoneError.textContent = 'Enter a phone number.';
            phoneInput.style.border = '5px solid';
            phoneInput.style.borderColor = 'red';
            phoneError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            phoneError.textContent = '';
            phoneValidator();
        }


        //validation - password
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Enter password.';
            passwordInput.style.border = '5px solid';
            passwordInput.style.borderColor = 'red';
            passwordError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            passwordError.textContent = '';
            passwordValidator();
        }


        //validation - confirm password
        if (!confPasswordInput.value.trim()) {
            confPasswordError.textContent = 'Enter password confirmation.';
            confPasswordInput.style.border = '5px solid';
            confPasswordInput.style.borderColor = 'red';
            confPasswordError.style.color = 'red';
            button.style.border = '5px solid red';
        }
        else {
            confPasswordError.textContent = '';
            confirmPasswordValidator();
        }

    });

});
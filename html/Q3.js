document.addEventListener('DOMContentLoaded', function () {

    const form  = document.getElementById("formDetails");
    const username = document.getElementById("userName");
    const password = document.getElementById("password");
    const button = document.getElementById("btn");


    function buttonFunction() {
        if (username.value == "" && password.value == "") {
            document.getElementById("nameInfo").innerHTML = "Note:  Can't pass empty fields!";
            document.getElementById("passwordInfo").innerHTML = "Note:  Can't pass empty fields!";
        }
        else if (username.value == "") {
            document.getElementById("nameInfo").innerHTML = "Note:  Can't pass empty fields!";
        }
        else if (password.value == "") {
            document.getElementById("nameInfo").innerHTML = "";
            document.getElementById("passwordInfo").innerHTML = "Note:  Can't pass empty fields!";
        }
        else if (password.value.length < 5) {
            document.getElementById("passwordInfo").innerHTML = "";
            document.getElementById("passwordInfo").innerHTML = "Note:  Length of password should be more than 4!";
        }
        else {
            button.addEventListener('click', (e) => e.currentTarget.setAttribute('disabled', true));
            document.getElementById("nameInfo").innerHTML = "";
            document.getElementById("passwordInfo").innerHTML = "";
            console.log(
                'This form has a username of ' + username.value + ' and password of ' + password.value);

        };
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        buttonFunction();
    });   


});
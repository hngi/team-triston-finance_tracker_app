// listing all text elements
var email = document.getElementById['email'];
var password = document.getElementById['password'];

// listing all error display elements 
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

// listing all event listeners 
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

// validate function
function Validate() {

    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById('email').style.color = "red";
        email_error.textContent = "Email is required";
        email.focus();
        return false;
    }

    if (password.value == "" && password.value.length < 6) {
        password.style.border = "1px solid red";
        document.getElementById('password').style.color = "red";
        password_error.textContent = "Password is required";
        password.focus();
        return false;
    }
}
// event handler functions 
function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        document.getElementById('email').style.color = "#5e6e66";
        email_error.innerHTML = "";
        return true;
    }
}
function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid #5e6e66";
        document.getElementById('password').style.color = "#5e6e66";
        password_error.innerHTML = "";
        return true;
    }
}
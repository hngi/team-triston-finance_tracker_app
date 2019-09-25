// listing all text elements
var email = document.getElementById['email'];
var password = document.getElementById['password'];
var confirmPassword = document.getElementById('confirmPassword');
var errorMessage = document.getElementById('errorMessage');

// listing all error display elements 
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

// validate function
function Validate() {

    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById('email').style.color = "red";
        email_error.textContent = "Email is required";
        email.focus();
        return false;
    }

    if (password.value == "") {
        password.style.border = "1px solid red";
        document.getElementById('password').style.color = "red";
        password_error.textContent = "Password is required";
        password.focus();
        return false;
    }
}

email.addEventListener('keyup', function() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        document.getElementById('email').style.color = "#5e6e66";
        email_error.innerHTML = "";

        return true;
    }
});

password.addEventListener('keyup',function() {
    if (password.value != "") {
        password.style.border = "1px solid #5e6e66";
        document.getElementById('password').style.color = "#5e6e66";
        password_error.innerHTML = "";

        return true;
    }
});

confirmPassword.addEventListener('keyup' , function() {
    if (password.value !== confirmPassword.value) {
  
      errorMessage.style.display = "block";
  
    } else if (password.value === confirmPassword.value){
  
      errorMessage.style.display = "none";
    }
})

    


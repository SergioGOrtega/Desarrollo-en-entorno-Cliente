"use strict";

function validation(message, isSuccess) {

    const loginMessage = document.getElementById("loginMessage");
    const formInputs = document.querySelectorAll(".form-control");

    loginMessage.innerHTML = message;

    loginMessage.classList.remove("d-none", "valid-feedback", "invalid-feedback");

    if(isSuccess) {
        loginMessage.innerHTML += " <i class=\"bi bi-check2-circle\"></i>";
        loginMessage.classList.add("valid-feedback", "d-block");
    } else {

        loginMessage.innerHTML += " <i class=\"bi bi-exclamation-circle\"></i>";
        loginMessage.classList.add("invalid-feedback", "d-block");

        formInputs.forEach((formInput) => {
            formInput.classList.add("border-danger");
        });

    }

}

function resetErrors() {
    
    const loginMessage = document.getElementById("loginMessage");
    const formInputs = document.querySelectorAll(".form-control");

    formInputs.forEach((formInput) => {

        formInput.addEventListener("change", () => {
            formInput.classList.remove("border-danger");
            loginMessage.classList.remove("d-block");
        });
        
    });

}
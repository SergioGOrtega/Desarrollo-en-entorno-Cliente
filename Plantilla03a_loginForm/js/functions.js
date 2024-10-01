"use strict";

function showMessage(message, isSuccess) {

    const loginMessage = document.getElementById("loginMessage");

    loginMessage.innerHTML = message;
    loginMessage.classList.remove("d-none", "text-success", "text-danger");

    if(isSuccess) {
        loginMessage.classList.add("text-success");
    } else {
        loginMessage.classList.add("text-danger");
    }

}
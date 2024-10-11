"use strict";

function login() {

    const STORAGED_USERNAME = "Sergio";
    const STORAGED_PASSWORD = "hola123";
    
    const loginForm = document.getElementById("loginForm");

    if(getCookie("loggedIn") === "true") {
        window.location.href = "./exercises/index.html";
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const usernameValue = document.getElementById("usernameInput").value;
        const passwordValue = document.getElementById("passwordInput").value;

        let errorMessage = "";
        let isValid = false;

        if((usernameValue === "") || (passwordValue === "")) {
            errorMessage = "You must enter a username and password!";
        } else if(usernameValue.length < 3) {
            errorMessage = "The username must have at least 3 characters!";
        } else if((usernameValue === STORAGED_USERNAME) && (passwordValue === STORAGED_PASSWORD)) {
            isValid = true;
            setCookie("loggedIn", "true", 1);
        } else {
            errorMessage = "Incorrect username and/or password!";
        }

        if(isValid) {

            validation("Logged successfully!", true);

            setTimeout(() => {
                window.location.href = "./exercises/index.html";
            }, 2000);

        } else {
            validation(errorMessage, false);
            resetErrors();
        }

    });

}

window.onload = () => {
    login();
}
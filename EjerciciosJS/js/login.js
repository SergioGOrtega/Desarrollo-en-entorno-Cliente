"use strict";

async function checkLoginStatus() {

    if((await getIndexedDb("loggedIn")) === "true") {
        window.location.href = "./exercises/home.html";
    }

}

async function login() {

    const STORAGED_USERNAME = "Sergio";
    const STORAGED_PASSWORD = "hola123";
    
    const loginForm = document.getElementById("loginForm");

    await checkLoginStatus();

    loginForm.addEventListener("submit", async (event) => {
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
            await setIndexedDb("loggedIn", "true");
        } else {
            errorMessage = "Incorrect username and/or password!";
        }

        if(isValid) {

            validation("Logged successfully!", true);

            setTimeout(() => {
                window.location.href = "./exercises/home.html";
            }, 2000);

        } else {
            validation(errorMessage, false);
            resetErrors();
        }

    });

}

login();
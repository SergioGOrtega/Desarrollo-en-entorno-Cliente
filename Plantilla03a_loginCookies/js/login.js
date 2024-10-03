"use strict";

function login() {

    const storagedUsername = "Sergio";
    const storagedPassword = "hola123";
    
    const loginDiv = document.getElementById("loginDiv");
    const mainContent = document.getElementById("mainContent");
    const logoutButton = document.getElementById("logoutButton");
    const loginButton = loginDiv.querySelector("input[type=\"button\"]");

    if(getCookie("loggedIn") === "true") {
        loginDiv.classList.add("d-none");
        logoutButton.style.display = "block";
        mainContent.style.display = "block";
    }

    loginButton.addEventListener("click", () => {
        
        const usernameValue = document.getElementById("usernameInput").value;
        const passwordValue = document.getElementById("passwordInput").value;
        let errorMessage = "";
        let isValid = false;

        if((usernameValue === "") || (passwordValue === "")) {
            errorMessage = "¡Debe introducir un usuario y una contraseña!";
        } else if(usernameValue.length < 3) {
            errorMessage = "¡El usuario debe tener al menos 3 carácteres!";
        } else if((usernameValue === storagedUsername) && (passwordValue === storagedPassword)) {
            isValid = true;
            setCookie("loggedIn", "true", 1);
        } else {
            errorMessage = "¡Usuario y/o contraseña incorrectos!";
        }

        if(isValid) {

            showMessage("¡Bienvenido!", true);

            setTimeout(() => {
                loginDiv.classList.add("d-none");
                logoutButton.style.display = "block";
                mainContent.style.display = "block";
            }, 2000);

        } else {
            showMessage(errorMessage, false);
        }

    });

    logoutButton.addEventListener("click", () => {

        eraseCookie("loggedIn");
        
        loginDiv.classList.remove("d-none");
        loginDiv.classList.add("d-block");
        mainContent.style.display = "none";
        logoutButton.style.display = "none";

        showMessage("", true);

    });

}

window.onload = () => {
    login();
}
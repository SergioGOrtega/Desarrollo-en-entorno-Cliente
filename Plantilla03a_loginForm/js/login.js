"use strict";

function login() {

    let storagedUsername = "Sergio";
    let storagedPassword = "hola123";
    
    const loginDiv = document.getElementById("loginDiv");
    const mainContent = document.getElementById("mainContent");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    const button = loginDiv.querySelector("input[type=\"button\"]");

    button.addEventListener("click", () => {
        
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;
        let errorMessage = "";
        let isValid = false;

        if((usernameValue === "") || (passwordValue === "")) {
            errorMessage = "¡Debe introducir un usuario y una contraseña!";
        } else if(usernameValue.length < 3) {
            errorMessage = "¡El usuario debe tener al menos 3 carácteres!";
        } else if((usernameValue === storagedUsername) && (passwordValue === storagedPassword)) {
            isValid = true;
        } else {
            errorMessage = "¡Usuario y/o contraseña incorrectos!";
        }

        if(isValid) {

            showMessage("¡Bienvenido!", isValid);

            setTimeout(() => {
                loginDiv.classList.add("d-none");
                mainContent.style.display = "block";
            }, 2000);

        } else {
            showMessage(errorMessage, isValid);
        }

    });

}

window.onload = () => {
    login();
}
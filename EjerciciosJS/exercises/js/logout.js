"use strict";

function logout() {

    document.getElementById("logoutButton").addEventListener("click", () => {
        eraseLocalStorage("loggedIn");
    });

}

logout();
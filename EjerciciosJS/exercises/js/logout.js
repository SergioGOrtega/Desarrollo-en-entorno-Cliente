"use strict";

function logout() {

    document.getElementById("logoutButton").addEventListener("click", () => {
        eraseCookie("loggedIn");
    });

}

logout();
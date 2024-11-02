"use strict";

function logout() {

    document.getElementById("logoutButton").addEventListener("click", async () => {
        await deleteIndexedDb("loggedIn");
    });

}

logout();
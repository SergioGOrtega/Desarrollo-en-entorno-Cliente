"use strict";

function getCookie(name) {

    const cookies = document.cookie.split(";");
    const nameEQ = `${name}=`;
    let cookie_found = null;

    cookies.forEach((cookie) => {
        cookie = cookie.trim();

        if(cookie.indexOf(nameEQ) === 0) {
            cookie_found = decodeURIComponent(cookie.substring(nameEQ.length));
        }

    });

    return cookie_found;

}
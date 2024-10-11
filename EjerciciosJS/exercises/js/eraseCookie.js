"use strict";

function eraseCookie(name) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Strict; Secure`;
}
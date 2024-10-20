"use strict";

function getLocalStorage(name) {
    const value = localStorage.getItem(name);
    return (value) ? encodeURIComponent(value) : null;
}
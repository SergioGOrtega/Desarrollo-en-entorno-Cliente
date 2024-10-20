"use strict";

function setLocalStorage(name, value) {
    localStorage.setItem(name, encodeURIComponent(value || ""));
}
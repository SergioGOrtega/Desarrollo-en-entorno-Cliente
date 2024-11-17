"use strict";

let accessData = [];

document.querySelector("form").addEventListener("submit", () => {

    const name = document.getElementById("name");
    const value = document.getElementById("value");

    saveData(name.value, value.value);

});

showData();
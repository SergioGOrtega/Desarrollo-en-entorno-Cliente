"use strict";

const generateButton = document.getElementById("generateButton");
const randomButton = document.getElementById("randomButton");
const fasterButton = document.getElementById("fasterButton");
const slowerButton = document.getElementById("slowerButton");
const stopButton = document.getElementById("stopButton");
const upperCaseButton = document.getElementById("upperCaseButton");
const lowerCaseButton = document.getElementById("lowerCaseButton");
const capitalizeFirstLettersButton = document.getElementById("capitalizeFirstLettersButton");
const capitalizeLastLettersButton = document.getElementById("capitalizeLastLettersButton");
const lowerCaseFirstLettersButton = document.getElementById("lowerCaseFirstLettersButton");
const lowerCaseLastLettersButton = document.getElementById("lowerCaseLastLettersButton");
const capitalizeVowelsButton = document.getElementById("capitalizeVowelsButton");
const lowerCaseVowelsButton = document.getElementById("lowerCaseVowelsButton");
const capitalizeConsonantsButton = document.getElementById("capitalizeConsonantsButton");
const lowerCaseConsonantsButton = document.getElementById("lowerCaseConsonantsButton");

let interval;

generateButton.addEventListener("click", async () => {

    const category = await getRandomCategory();

    let data;

    if(category !== null) {
        data = await getApiData(`https://api.chucknorris.io/jokes/random?category=${category}`);
    }
        
    (data.value) ? textArea.value = data.value : textArea.value = "ERROR!";

});

upperCaseButton.addEventListener("click", upperCase)

lowerCaseButton.addEventListener("click", lowerCase);

capitalizeFirstLettersButton.addEventListener("click", capitalizeFirstLetters);

capitalizeLastLettersButton.addEventListener("click", capitalizeLastLetters)

lowerCaseFirstLettersButton.addEventListener("click", lowerCaseFirstLetters);

lowerCaseLastLettersButton.addEventListener("click", lowerCaseLastLetters);

capitalizeVowelsButton.addEventListener("click", capitalizeVowels);

lowerCaseVowelsButton.addEventListener("click", lowerCaseVowels);

capitalizeConsonantsButton.addEventListener("click", capitalizeConsonants);

lowerCaseConsonantsButton.addEventListener("click", lowerCaseConsonants);

randomButton.addEventListener("click", () => {

    interval = setInterval(() => {
        getRandomFunction()();
    }, 500);

});

fasterButton.addEventListener("click", () => {

    clearInterval(interval);

    interval = setInterval(() => {
        getRandomFunction()();
    }, 100);

});

slowerButton.addEventListener("click", () => {

    clearInterval(interval);

    interval = setInterval(() => {
        getRandomFunction()();
    }, 1000);

});

stopButton.addEventListener("click", () => {
    clearInterval(interval);
});
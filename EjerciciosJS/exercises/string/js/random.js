"use strict";

function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomFunction() {

    const functions = [
        upperCase,
        lowerCase,
        capitalizeFirstLetters,
        capitalizeLastLetters,
        lowerCaseFirstLetters,
        lowerCaseLastLetters,
        capitalizeVowels,
        lowerCaseVowels,
        capitalizeConsonants,
        lowerCaseConsonants
    ];

    return functions[randomNumber(0, functions.length-1)];

}

async function getRandomCategory() {

    const categories = await getApiData("https://api.chucknorris.io/jokes/categories");
    
    let category = null;

    if(categories !== null) {
        const customCategories = categories.filter(category => (category !== "explicit") && (category !== "political") && (category !== "religion"));
        category = customCategories[randomNumber(0, customCategories.length-1)];
    }

    return category;

}
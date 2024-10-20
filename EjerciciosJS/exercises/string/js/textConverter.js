"use strict";
    
const textArea = document.getElementById("textArea");

function upperCase() {
    textArea.value = textArea.value.toUpperCase();
}

function lowerCase() {
    textArea.value = textArea.value.toLowerCase();
}

function capitalizeFirstLetters() {

    const words = textArea.value.split(" ");
    const firstLettersCapitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    textArea.value = firstLettersCapitalized.join(" ");

}

function capitalizeLastLetters() {
        
    const words = textArea.value.split(" ");

    const firstLettersCapitalized = words.map(word => {

        let result;

        if(word.includes(".") || word.includes(",")) {

            const wordWithoutLastChar = word.slice(0, -1);
            const lastChar = wordWithoutLastChar.slice(-1).toUpperCase();
            const restOfWord = wordWithoutLastChar.slice(0, -1);

            result = restOfWord + lastChar + word.slice(-1);

        } else {

            const wordWithoutLastChar = word.slice(0, -1);
            const lastChar = word.slice(-1).toUpperCase();

            result = wordWithoutLastChar + lastChar;

        }

        return result;

    });

    textArea.value = firstLettersCapitalized.join(" ");

}

function lowerCaseFirstLetters() {
  
    const words = textArea.value.split(" ");
    const firstLettersCapitalized = words.map(word => word.charAt(0).toLowerCase() + word.slice(1));

    textArea.value = firstLettersCapitalized.join(" ");

}

function lowerCaseLastLetters() {
        
    const words = textArea.value.split(" ");

    const firstLettersCapitalized = words.map(word => {

        let result;

        if(word.includes(".") || word.includes(",")) {

            const wordWithoutLastChar = word.slice(0, -1);
            const lastChar = wordWithoutLastChar.slice(-1).toLowerCase();
            const restOfWord = wordWithoutLastChar.slice(0, -1);

            result = restOfWord + lastChar + word.slice(-1);

        } else {

            const wordWithoutLastChar = word.slice(0, -1);
            const lastChar = word.slice(-1).toLowerCase();

            result = wordWithoutLastChar + lastChar;

        }

        return result;

    });

    textArea.value = firstLettersCapitalized.join(" ");

}

function capitalizeVowels() {
    textArea.value = textArea.value.replace(/[aeiou]/g, vowelFound => vowelFound.toUpperCase());
}

function lowerCaseVowels() {
    textArea.value = textArea.value.replace(/[AEIOU]/g, vowelFound => vowelFound.toLowerCase());
}

function capitalizeConsonants() {
    textArea.value = textArea.value.replace(/[bcdfghjklmnpqrstvwxyz]/g, consonantFound => consonantFound.toUpperCase());
}

function lowerCaseConsonants() {
    textArea.value = textArea.value.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, consonantFound => consonantFound.toLowerCase());
}
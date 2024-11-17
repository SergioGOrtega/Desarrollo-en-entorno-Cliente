"use strict";

showData();

document.getElementById("save").addEventListener("click", () => {

    const name = document.getElementById("name");
    const role = document.getElementById("role");
    const img = document.getElementById("img");

    saveData(name.value, role.value, img.value);

});

document.getElementById("addOne").addEventListener("click", async () => {

    const data = await getApiData("https://api.jikan.moe/v4/anime/21/characters");
    const characters = data.data;

    let character = characters[randomNumber(0, characters.length-1)]; 
    saveData(character.character.name, character.role, character.character.images.jpg.image_url);

});

document.getElementById("addFive").addEventListener("click", async () => {

    const data = await getApiData("https://api.jikan.moe/v4/anime/21/characters");
    const characters = data.data;

    let character;

    for(let i = 0; i < 5; i++) {
        character = characters[randomNumber(0, characters.length-1)];
        saveData(character.character.name, character.role, character.character.images.jpg.image_url);
    }

});
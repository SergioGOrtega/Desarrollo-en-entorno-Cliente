"use strict";

import { Stack } from '../classes/Stack.js';
import { randomNumber } from './random.js';

const info = document.getElementById("info");
const garmentsDiv = document.getElementById("garments-div");
const laundry = new Stack();
const LAUNDRY_BASKET = 10;
const GARMENTS = [
    "SHIRT 👕", 
    "PANTS 👖", 
    "T-SHIRT 👕", 
    "UNDERWEAR 🩲", 
    "SOCKS 🧦", 
    "JACKET 🧥", 
    "SCARF 🧣", 
    "SWEATSHIRT 👚", 
    "VEST 🦺", 
    "COAT 🧥"
];

export function put() {

    let garment = GARMENTS[randomNumber(0, GARMENTS.length-1)];

    if(laundry.size() === LAUNDRY_BASKET) {
       info.innerHTML = "YOU SHOULD START WASHING THE CLOTHES!";
    } else {
        
        laundry.add(garment);
        
        const garmentDiv = document.createElement("div");
        garmentDiv.classList.add("border", "border-1");
        garmentDiv.textContent = garment;

        garmentsDiv.prepend(garmentDiv);

        info.innerHTML = `${laundry.size()} garments are still left to wash.<br>`;
        info.innerHTML += `The next garment to wash is ${laundry.check()}`;
        
        garmentsDiv.classList.remove("d-none");
        info.classList.remove("d-none");

    }

}

export function pullOut() {

    if(laundry.isEmpty()) {
        info.innerHTML = "THERE IS NO MORE CLOTHES TO WASH!";
    } else {    

        laundry.remove();

        garmentsDiv.removeChild(garmentsDiv.firstChild);

        info.innerHTML = `${laundry.size()} garments are still left to wash.<br>`;

        if(!laundry.isEmpty()) {
            info.innerHTML += `The next garment to wash is ${laundry.check()}`;
        }

    }

}
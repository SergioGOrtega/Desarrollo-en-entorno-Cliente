"use strict";

import { Queue } from '../classes/Queue.js';
import { randomNumber } from './random.js';

const info = document.getElementById("info");
const carsDiv = document.getElementById("cars-div");
const carWorkshop = new Queue();
const WORKSHOP_CAPACITY = 10;
const CARS = [
    'Sedan 🚗',
    'SUV 🚙',
    'Convertible 🚘',
    'Coupe 🚗',
    'Truck 🚚',
    'Van 🚐',
    'Wagon 🚙',
    'Sports car 🏎️',
    'Electric car ⚡',
    'Minivan 🚐'
];

export function put() {

    let car = CARS[randomNumber(0, CARS.length-1)];

    if(carWorkshop.size() === WORKSHOP_CAPACITY) {
       info.innerHTML = "YOU SHOULD START REPAIRING THE VEHICLES!";
    } else {
        
        carWorkshop.add(car);
        
        const carDiv = document.createElement("div");
        carDiv.classList.add("border", "border-1");
        carDiv.textContent = car;

        carsDiv.appendChild(carDiv);

        info.innerHTML = `${carWorkshop.size()} vehicles are still left to repair.<br>`;
        info.innerHTML += `The next vehicle to repair is ${carWorkshop.check()}`;
        
        carsDiv.classList.remove("d-none");
        info.classList.remove("d-none");

    }

}

export function pullOut() {

    if(carWorkshop.isEmpty()) {
        info.innerHTML = "THERE IS NO MORE VEHICLES TO REPAIR!";
    } else {    

        carWorkshop.remove();

        carsDiv.removeChild(carsDiv.firstChild);

        info.innerHTML = `${carWorkshop.size()} vehicles are still left to repair.<br>`;

        if(!carWorkshop.isEmpty()) {
            info.innerHTML += `The next vehicle to repair is ${carWorkshop.check()}`;
        }

    }

}
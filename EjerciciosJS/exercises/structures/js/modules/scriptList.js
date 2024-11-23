"use strict";

import { List } from '../classes/List.js';
import { randomNumber } from './random.js';

const info = document.getElementById("info");
const tasksDiv = document.getElementById("tasks-div");
const tasksList = new List();
const TASKS_MAX = 10;
const TASKS = [
    'Write a blog post ✍️',
    'Clean the house 🧹',
    'Walk the dog 🐕',
    'Cook dinner 🍳',
    'Water the plants 🌱',
    'Do the laundry 🧺',
    'Read a book 📖',
    'Go for a run 🏃‍♂️',
    'Shop for groceries 🛒',
    'Plan a vacation ✈️'
];

export function put() {

    let task = TASKS[randomNumber(0, TASKS.length-1)];
    let index = randomNumber(0, tasksList.size()-1);

    if(tasksList.size() === TASKS_MAX) {
       info.innerHTML = "YOU SHOULD START DOING THE TASKS!";
    } else {
        
        tasksList.add(task, index);
        
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("border", "border-1");
        taskDiv.textContent = task;

        tasksDiv.appendChild(taskDiv);

        info.innerHTML = `${tasksList.size()} tasks are still left to do.`;
        
        tasksDiv.classList.remove("d-none");
        info.classList.remove("d-none");

    }

}

export function pullOut() {

    let index = randomNumber(0, tasksList.size()-1);

    if(tasksList.isEmpty()) {
        info.innerHTML = "THERE IS NO MORE TASKS TO DO!";
    } else {    

        tasksList.remove(index);

        showRemainingTasks();

        info.innerHTML = `${tasksList.size()} tasks are still left to do.`;

    }

}

function showRemainingTasks() {

    tasksDiv.innerHTML = "";    

    tasksList.return().forEach(item => {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("border", "border-1");
        taskDiv.textContent = item;

        tasksDiv.appendChild(taskDiv);

    });

}
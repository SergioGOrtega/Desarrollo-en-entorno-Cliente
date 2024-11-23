"use strict";

import { put, pullOut } from './modules/scriptList.js';

window.onload = () => {
    document.getElementById("insert-button").addEventListener("click", put);
    document.getElementById("remove-button").addEventListener("click", pullOut);
}
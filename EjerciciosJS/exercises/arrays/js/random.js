"use strict";

function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
} 

function getRandomMatrix(dimension) {

    const matrix = [];

    for(let i = 0; i < dimension; i++) {

        matrix[i] = []

        for(let j = 0; j < dimension; j++) {
            matrix[i][j] = randomNumber(0, 9);
        }

    }

    return matrix;

}

function getRandomFunction() {

    const functions = getAllFunctions();

    return functions[randomNumber(0, functions.length-1)];

}

function setCustomInterval(interval, matrixA, matrixB, dimension, firstDiv, secondDiv, resultDiv, time) {

    interval.id = setInterval(() => {

        matrixA = getRandomMatrix(dimension);
        matrixB = getRandomMatrix(dimension);

        writeMatrix(matrixA, firstDiv, "Matrix A");
        writeMatrix(matrixB, secondDiv, "Matrix B");
        writeMatrix(getRandomFunction()(matrixA, matrixB), resultDiv, "Result");

    }, time);

}
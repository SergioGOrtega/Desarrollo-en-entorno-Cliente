"use strict";

const dimension = document.getElementById("matrix-dimension");
const generateRandomValueButton = document.getElementById("generate-value");
const generateMatricesButton = document.getElementById("generate-matrices");
const sumMatricesButton = document.getElementById("sum");
const substractMatricesButton = document.getElementById("substract");
const multiplyMatricesButton = document.getElementById("multiply");
const randomButton = document.getElementById("random");
const fasterButton = document.getElementById("faster");
const slowerButton = document.getElementById("slower");
const stopButton = document.getElementById("stop");
const firstMatrixDiv = document.getElementById("matrix-a");
const secondMatrixDiv = document.getElementById("matrix-b");
const resultMatrixDiv = document.getElementById("matrix-c");

generateRandomValueButton.addEventListener("click", () => {
    dimension.value = randomNumber(2, 5);
});

let matrixA;
let matrixB;
let textContent;

generateMatricesButton.addEventListener("click", () => {

    const formInput = document.querySelector(".form-control");
    const formErrorMessage = document.querySelector(".form-text");
    
    resultMatrixDiv.innerHTML = "";

    if(dimension.value < 2 || dimension.value > 5 || dimension.value === "" || isNaN(dimension.value)) {
        formInput.classList.add("border-danger");
        formErrorMessage.classList.remove("d-none");
        formErrorMessage.innerHTML = "You must introduce a dimension between 2 and 5!";
    } else {

        formInput.classList.remove("border-danger");
        formErrorMessage.classList.add("d-none");

        matrixA = getRandomMatrix(dimension.value);
        matrixB = getRandomMatrix(dimension.value);

        writeMatrix(matrixA, firstMatrixDiv, "Matrix A");
        writeMatrix(matrixB, secondMatrixDiv, "Matrix B");
        
    }
 
});

sumMatricesButton.addEventListener("click", () => {

    textContent = (!matrixA.length && !matrixB.length) ? "":"Result";

    writeMatrix(sumMatrix(matrixA, matrixB), resultMatrixDiv, textContent);

});

substractMatricesButton.addEventListener("click", () => {
    
    textContent = (!matrixA.length && !matrixB.length) ? "":"Result";

    writeMatrix(substractMatrix(matrixA, matrixB), resultMatrixDiv, textContent);
    
});

multiplyMatricesButton.addEventListener("click", () => {
    
    textContent = (!matrixA.length && !matrixB.length) ? "":"Result";

    writeMatrix(multiplyMatrix(matrixA, matrixB), resultMatrixDiv, textContent);
    
});

let interval = { id: null };

randomButton.addEventListener("click", () => {

    const randomDimension = randomNumber(2, 5);

    clearInterval(interval.id);
    setCustomInterval(interval, matrixA, matrixB, randomDimension, firstMatrixDiv, secondMatrixDiv, resultMatrixDiv, 500);

    fasterButton.addEventListener("click", () => {
        clearInterval(interval.id);
        setCustomInterval(interval, matrixA, matrixB, randomDimension, firstMatrixDiv, secondMatrixDiv, resultMatrixDiv, 100);
    });

    slowerButton.addEventListener("click", () => {
        clearInterval(interval.id);
        setCustomInterval(interval, matrixA, matrixB, randomDimension, firstMatrixDiv, secondMatrixDiv, resultMatrixDiv, 1000);
    });

    stopButton.addEventListener("click", () => {
        clearInterval(interval.id);
        setTimeout(() => {
            matrixA = [];
            matrixB = [];
            firstMatrixDiv.innerHTML = "";
            secondMatrixDiv.innerHTML = "";
            resultMatrixDiv.innerHTML = "";
        }, 2000);
    });

});
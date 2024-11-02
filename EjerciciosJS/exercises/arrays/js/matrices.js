"use strict";

function writeMatrix(matrix, div, matrixName) {

    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    const tableHead = document.createElement("thead");
    const head = document.createElement("th");

    head.textContent = matrixName;
    head.colSpan = matrix.length;

    div.innerHTML = "";
    
    matrix.forEach((array) => {
        
        const row = document.createElement("tr");
        
        array.forEach((number) => {
            const data = document.createElement("td");
            data.textContent = number;
            row.appendChild(data);
        });
        
        tableBody.appendChild(row);

    });

    tableHead.appendChild(head);
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    div.appendChild(table);

}

function sumMatrix(matrixA, matrixB) {

    const result = matrixA.map((array, i) => {
        return array.map((number, j) => number + matrixB[i][j]);
    });

    return result;

}

function substractMatrix(matrixA, matrixB) {

    const result = matrixA.map((array, i) => {
        return array.map((number, j) => number - matrixB[i][j]);
    });

    return result;

}

function multiplyMatrix(matrixA, matrixB) {

    const result = matrixA.map((array) => {
        return matrixB.map((_, j) => array.reduce((sum, number, k) => sum + number * matrixB[k][j], 0));
    });

    return result;

}

function getAllFunctions() {
    return [sumMatrix, substractMatrix, multiplyMatrix];
}
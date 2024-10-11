"use strict";

function calculator() {

    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            
            const contentButton = button.innerHTML;

            if((button.id === "c") || ((button.id === "delete") && (display.innerHTML.length === 1))) {
                display.innerHTML = "0";
            } else if((button.id === "delete") && (display.innerHTML !== "0")) {
                display.innerHTML = display.innerHTML.slice(0, -1); 
            } else if((display.innerHTML === "0") && (button.id !== "delete")) {
                display.innerHTML = contentButton;
            } else if ((display.innerHTML !== 0) && (button.id !== "c") && (button.id !== "delete") && (button.id !== "equals")) {
                display.innerHTML += contentButton;
            } else if(button.id === "equals") {
                display.innerHTML = calculateContent(display.innerHTML).toFixed(2);
            }

        });

    });

}

function calculateContent(content) {

    let characters = content.match(/(\d+(\.\d+)?|[+\-*/])/g);
    let result = 0;
    let currentOperator = '+';

    characters.forEach((character) => {

        if(!isNaN(character)) {

            let number = parseFloat(character);

            switch(currentOperator) {

                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    result /= number;
                    break;
                
            }

        } else {
            currentOperator = character;
        }

    });

    return result;

}

window.onload = () => {
    calculator();
}
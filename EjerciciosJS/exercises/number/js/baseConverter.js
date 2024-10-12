"use strict";

function baseConverter() {

    const form = document.getElementById("baseConverterForm");
    const resultMessage = document.getElementById("resultMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const number = parseInt(document.getElementById("numberInput").value);
        const option = document.getElementById("optionInput").value;
        let valid = "text-success";

        let result;
        
        if(isNaN(number) || number < 0 || option === "Options") {
            result = "Data input error, impossible to calculate!";
            valid = "text-danger";
        } else {

            switch(option) {
    
                case "Binary":
                    result = number.toString(2);
                    break;
                case "Octal":
                    result = number.toString(8);
                    break;
                case "Hexadecimal":
                    result = number.toString(16);
                    break;
    
            }

        }

        resultMessage.classList.remove("d-none", "text-success", "text-danger");
        resultMessage.classList.add(valid);

        resultMessage.innerHTML = result;

    });

}

baseConverter();
"use strict";

function saveData(name, value) {

    accessData.push({
        name: name,
        value: value
    });

    sessionStorage.setItem("accessLocal", JSON.stringify(accessData));

}

function deleteData(name) {

    accessData = JSON.parse(sessionStorage.getItem("accessLocal"));
    accessData = accessData.filter(item => item.name != name);

    sessionStorage.setItem("accessLocal", JSON.stringify(accessData));

    showData();

}

function updateData(name, value) {

    document.getElementById("name").value = decodeURIComponent(name);
    document.getElementById("value").value = decodeURIComponent(value);

    deleteData(name);

}

function showData() {

    const thead = document.querySelector("thead");
    const tbody = document.querySelector("tbody");

    if(sessionStorage.getItem("accessLocal") && JSON.parse(sessionStorage.getItem("accessLocal")).length > 0) {

        accessData = JSON.parse(sessionStorage.getItem("accessLocal"));

        thead.classList.remove("d-none");
        tbody.innerHTML = "";

        accessData.forEach(item => {

            const row = document.createElement("tr");
            const fieldName = document.createElement("td");
            const fieldValue = document.createElement("td");
            const buttonsContainer = document.createElement("td");
            const deleteButton = document.createElement("button");
            const updateButton = document.createElement("button");

            fieldName.innerHTML = item.name;
            fieldValue.innerHTML = item.value;

            buttonsContainer.classList.add("buttons-container");

            deleteButton.innerHTML = "Delete";
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.addEventListener("click", () => deleteData(item.name));

            updateButton.innerHTML = "Update";
            updateButton.classList.add("btn", "btn-warning");
            updateButton.addEventListener("click", () => updateData(item.name, item.value));
            
            buttonsContainer.appendChild(updateButton);
            buttonsContainer.appendChild(deleteButton);
            row.appendChild(fieldName);
            row.appendChild(fieldValue);
            row.appendChild(buttonsContainer);
            
            tbody.appendChild(row);
            
        });

    } else {
        thead.classList.add("d-none");
        tbody.innerHTML = "There is no data to display.";
    }

}
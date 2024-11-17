"use strict";

function saveData(name, value) {

    const date = new Date();
    const expiryDateCookie = 1 * 60 * 1000; // 1 minute
    
    date.setTime(date.getTime() + expiryDateCookie)

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Expires=${date.toUTCString()}; path=/; SameSite=Strict; Secure`;
    
    showData();

}

function deleteData(name) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Strict; Secure`;
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

    if(document.cookie && document.cookie.length > 0) {

        const cookies = document.cookie.split(";");

        thead.classList.remove("d-none");
        tbody.innerHTML = "";

        cookies.forEach(cookie => {

            const row = document.createElement("tr");
            const fieldName = document.createElement("td");
            const fieldValue = document.createElement("td");
            const buttonsContainer = document.createElement("td");
            const deleteButton = document.createElement("button");
            const updateButton = document.createElement("button");

            cookie = cookie.trim().split("=");

            fieldName.innerHTML = cookie[0];
            fieldValue.innerHTML = cookie[1];

            buttonsContainer.classList.add("buttons-container");

            deleteButton.innerHTML = "Delete";
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.addEventListener("click", () => deleteData(cookie[0]));

            updateButton.innerHTML = "Update";
            updateButton.classList.add("btn", "btn-warning");
            updateButton.addEventListener("click", () => updateData(cookie[0], cookie[1]));
            
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
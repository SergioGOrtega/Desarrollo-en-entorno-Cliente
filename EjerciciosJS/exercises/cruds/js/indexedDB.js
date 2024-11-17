"use strict";

let crudDb;

async function openDb() {
    
    return new Promise((resolve, reject) => {

        const request = indexedDB.open("CRUD", 1);

        request.onerror = (event) => {
            console.error("IndexedDB: Error trying to open the data base", event);
            reject(event);
        }
        
        request.onsuccess = (event) => {
            crudDb = event.target.result;
            console.log("IndexedDB: Data base (CRUD) successfully opened");
            resolve(crudDb);
        }
        
        request.onupgradeneeded = (event) => {
            
            crudDb = event.target.result;
            
            if(!crudDb.objectStoreNames.contains("CharacterStore")) {
                const registers = crudDb.createObjectStore("CharacterStore", { keyPath: "id", autoIncrement: true });
                registers.createIndex("name", "name", { unique: false });
                registers.createIndex("role", "role", { unique: false });
                registers.createIndex("img", "img", { unique: false });
                console.log("IndexedDB: Store successfully created")
            }
        
        }

    });

}

function saveData(name, role, img) {

    const transaction = crudDb.transaction("CharacterStore", "readwrite").objectStore("CharacterStore");
    transaction.put({ name, role, img });

    showData();

}

function deleteData(id) {
        
    const transaction = crudDb.transaction("CharacterStore", "readwrite").objectStore("CharacterStore");
    transaction.delete(id);

    showData();

}

function updateData(id) {

    const transaction = crudDb.transaction("CharacterStore", "readwrite").objectStore("CharacterStore");
    const getRequest = transaction.get(id);

    getRequest.onsuccess = (event) => {

        const register = event.target.result;

        document.getElementById("name").value = register.name;
        document.getElementById("role").value = register.role;
        document.getElementById("img").value = register.img;

        deleteData(register.id);
    
    }

}

async function showData() {

    await openDb();

    const thead = document.querySelector("thead");
    const tbody = document.querySelector("tbody");
        
    const transaction = crudDb.transaction("CharacterStore", "readonly").objectStore("CharacterStore");
    const numberRegisters = transaction.count();

    transaction.getAll().onsuccess = (event) => {

        if(numberRegisters.result > 0) {
            const registers = event.target.result;
    
            thead.classList.remove("d-none");
            tbody.innerHTML = "";

            registers.forEach(register => {

                const row = document.createElement("tr");
                const fieldName = document.createElement("td");
                const fieldRole = document.createElement("td");
                const fieldImg = document.createElement("td");
                const buttonsContainer = document.createElement("td");
                const deleteButton = document.createElement("button");
                const updateButton = document.createElement("button");

                fieldName.innerHTML = register.name;
                fieldRole.innerHTML = register.role;
                fieldImg.innerHTML = `<img src=${register.img}>`;

                buttonsContainer.classList.add("buttons-container");

                deleteButton.innerHTML = "Delete";
                deleteButton.type = "button";
                deleteButton.classList.add("btn", "btn-danger");
                deleteButton.addEventListener("click", () => deleteData(register.id));

                updateButton.innerHTML = "Update";
                updateButton.type = "button";
                updateButton.classList.add("btn", "btn-warning");
                updateButton.addEventListener("click", () => updateData(register.id));

                buttonsContainer.appendChild(updateButton);
                buttonsContainer.appendChild(deleteButton);
                row.appendChild(fieldName);
                row.appendChild(fieldRole);
                row.appendChild(fieldImg);
                row.appendChild(buttonsContainer);
                
                tbody.appendChild(row);

            });
        
        } else {
            thead.classList.add("d-none");
            tbody.innerHTML = "There is no data to display.";
        }
        
    }

}
"use strict";

let db;

function openDb() {

    return new Promise((resolve, reject) => {

        const request = indexedDB.open("LoginDB", 1);

        request.onerror = (event) => {
            console.error("IndexedDB: Error trying to open the data base", event);
            reject(event);
        }

        request.onsuccess = (event) => {
            db = event.target.result;
            console.log("IndexedDB: Data base successfully opened");
            resolve(db);
        }

        request.onupgradeneeded = (event) => {
            
            db = event.target.result;
            
            if(!db.objectStoreNames.contains("LoginStore")) {
                db.createObjectStore("LoginStore", { keyPath: "name" });
                console.log("IndexedDB: Store successfully created")
            }

        }

    });

}

async function getIndexedDb(key) {

    await openDb(); // We make sure that the DB is opened before returning the promise

    return new Promise((resolve, reject) => {

        const transaction = db.transaction(["LoginStore"], "readonly");
        const request = transaction.objectStore("LoginStore").get(key);

        request.onerror = (event) => {
            console.error("IndexedDB: Error trying to get the data", event);
            reject(event);
        }

        request.onsuccess = () => {

            if(request.result) {   
                const value = decodeURIComponent(request.result.value);
                console.log(`IndexedDB: Obtained ${key}=${value}`);
                resolve(value);
            } else {
                console.log(`IndexedDB: Value not found for ${key}`);
                resolve(null);
            }

        }

    });

}

async function setIndexedDb(key, value) {

    return new Promise((resolve, reject) => {

        const transaction = db.transaction(["LoginStore"], "readwrite");
        const request = transaction.objectStore("LoginStore").put({ name: key, value: value });

        request.onerror = (event) => {
            console.error("IndexedDB: Error trying to save the data", event);
            reject(event);
        }

        request.onsuccess = () => {
            console.log(`IndexedDB: Successfully stored ${key}=${value}`);
            resolve();
        }

    });

}

async function deleteIndexedDb(key) {

    return new Promise((resolve, reject) => {

        const transaction = db.transaction(["LoginStore"], "readwrite");
        const request = transaction.objectStore("LoginStore").delete(key);

        request.onerror = (event) => {
            console.error("IndexedDB: Error trying to delete the data", event);
            reject(event);
        }

        request.onsuccess = () => {
            console.log(`IndexedDB: Key "${key}" successfully deleted`);
            resolve();
        }

    });

}

openDb();
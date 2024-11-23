"use strict";

export class List {

    constructor() {
        this.list = [];
    }

    add(element, index) {
        this.list.splice(index, 0, element);
    }

    remove(index) {
        this.list.splice(index, 1);
    }

    isEmpty() {
        return this.list.length === 0;
    }

    size() {
        return this.list.length;
    }

    return() {
        return this.list;
    }

    check(index) {
        return this.list[index];
    }

}
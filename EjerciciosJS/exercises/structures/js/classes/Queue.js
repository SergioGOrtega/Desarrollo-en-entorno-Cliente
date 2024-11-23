"use strict";

import { List } from './List.js';

export class Queue extends List {

    constructor() {
        super();
    }

    add(element) {
        super.add(element, super.size());
    }

    remove() {
        super.remove(0);
    }

    check() {
        return super.check(0);
    }

}
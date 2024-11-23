"use strict";

import { List } from "./List.js";

export class Stack extends List {

    constructor() {
        super();
    }

    add(element) {
        super.add(element, super.size());
    }

    remove() {
        super.remove(super.size()-1);
    }

    check() {
        return super.check(super.size()-1);
    }

}
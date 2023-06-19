"use strict";
let tupleObject = {
    a: 20,
    b: 30,
    getTuple(a) {
        return [this.a, this.b, a];
    },
};
console.log(tupleObject.getTuple("a"));

"use strict";
const addEmpty = () => {
    return 0;
};
const addItSelf = (a) => {
    return a + a;
};
const addTwoNumbers = (a, b) => {
    return a + b;
};
function add(a, b) {
    if (a === undefined)
        return 0;
    if (b === undefined)
        return a + a;
    return a + b;
}

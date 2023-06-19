"use strict";
//
//type FilterFunction = {
//<T>(array: T[], fn: (item: T) => boolean): T[];
//};
//
//gehdeee yagaad zaaval overload function type iig ashiglah shaardlagatai ve geheer olon filter function baival terenden taaruulad neg type aar bvgden deer ni yavj bolno gehdee odoo 1 l type tai bolohoor dood taliin filter deer ustagsan bgaa
const filter = (array, fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (fn(item))
            result.push(item);
    }
    return result;
};
let strings = ["cat", "dog", "mouse", "mat"];
function fn(item) {
    return item === "cat";
}
const filter2 = (array, fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (fn(item))
            result.push(item);
    }
    return result;
};
let strings2 = ["cat", "dog", "mouse", "mat"];
function fn2(item) {
    return item === "cat";
}
//@ts-ignore
console.log(filter2(strings2, fn2));

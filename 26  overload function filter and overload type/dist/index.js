"use strict";
const filter = (array, fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (fn(item))
            result.push(item);
    }
    return result;
};
// Doorhi bol engiin overload function Deedeh bol arai ooroor type aar bichsen overload function
// function filter(array: number[], fn: (item: number) => boolean): number[];
// function filter(array: string[], fn: (item: string) => boolean): string[];
// function filter(array: object[], fn: (item: object) => boolean): object[];
// function filter(array: any[], fn: Function) {
//   let result: (typeof array)[number][] = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (fn(item)) result.push(item);
//   }
//   return result;
// }
let numbers = [12, 2, 4, 5, 12, 211123];
function fn1(item) {
    return item < 7;
}
// console.log(filter(numbers, fn1));
let strings = ["cat", "dog", "mouse", "mat"];
function fn2(item) {
    return item === "cat";
}
let objects = [
    {
        name: "azuka",
    },
    {
        name: "jaba",
    },
    {
        name: "naagii",
    },
    {
        name: "ariuka",
    },
];
function fn3(item) {
    return item.name === "azuka";
}

"use strict";
class Pc {
    constructor(color, brand, cpu) {
        this.color = color;
        this.brand = brand;
        this.cpu = cpu;
    }
    start() {
        console.log(this.color, "ongotei pc aslaa");
    }
}
const pc1 = new Pc("red", "lenevo", 8);
console.log(pc1.color);

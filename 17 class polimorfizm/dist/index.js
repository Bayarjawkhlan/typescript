"use strict";
class Dog {
    duugar() {
        return this.name + " iim nertei nohoi dugarlaa";
    }
    constructor(name, health, weight, foots) {
        this.health = health;
        this.name = name;
        this.weight = weight;
        this.foots = foots;
    }
}
class People {
    duugar() {
        return this.iq + "iim iq tai hvn dugarlaa ";
    }
    constructor(iq, health, weight, foots, nickName) {
        this.register = 20041224;
        this.iq = iq;
        this.health = health;
        this.weight = weight;
        this.nickName = nickName;
        this.foots = foots;
    }
}
const amitad = [
    new People(105.99, 90, 2),
    new Dog("banhar", 90, 10, 4),
    new Dog("Bambar", 100, 12, 4),
];
//ajiliig hongovchloh vvregtei l gej oilgoloo
for (let item of amitad) {
    console.log(item.duugar());
}

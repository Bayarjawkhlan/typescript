"use strict";
class UndaaTor {
    constructor() {
        this.data = [null, null];
    }
    add(baraa1, baraa2) {
        this.data = [baraa1, baraa2];
    }
}
const undaaTor = new UndaaTor();
const u1 = {
    type: "fanta",
    price: 2500,
};
const u2 = {
    type: "cola",
    price: 2500,
};
const a1 = {
    color: "green",
    price: 2500,
};
undaaTor.add(u1, u2);
console.log(undaaTor.data);
//generics
//generics ashiglahiin davuu tal bol duudaj bgaa gaztaas ni type iin avaad ter type aar ni class dotorh valienuudaa hyanana tehgui generics ashiglahgui iim zuild hiivel mash olon type or type or type or geh maygiin type bichij ogood alin orj orj irvel iim yum hiine eder geed esvel gantshan undaand zoriulj undaanii class bicheed alim nd bas oor class bichih hereg garna
class Tor {
    constructor() {
        this.data = [];
    }
    add(baraa) {
        this.data.push(baraa);
    }
}
const tor = new Tor();
tor.add(u1);
tor.add(a1);
tor.add(u2);
console.log(tor.data);

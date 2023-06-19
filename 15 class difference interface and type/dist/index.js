"use strict";
class SmartPhone {
    constructor() {
        this.cpu = 3;
        this.ram = 8;
        this.brand = "mac";
        this.Sim = {
            phoneNumber: 99119911,
            operator: "unitel",
            save(dugaar) {
                console.log(dugaar);
                return true;
            },
        };
    }
}
const sp = new SmartPhone();
console.log(sp);
const saveBoolean = sp.Sim.save(99119911);
console.log(saveBoolean);

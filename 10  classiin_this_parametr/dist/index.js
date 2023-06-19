"use strict";
class Pc {
    constructor(color) {
        this.brand = "lenovo";
        this.cpu = 0;
        this.color = color;
    }
    //zonvhon typescript  baidag  arga  ingeh yum bol duriin neg utga ene start fundtiong ashiglaj chadahgui  ingej hamgaalj ogohgui bol  hamgiin dood taliin morond baigaa shig duudaad ashiglaad undifiened console dood baina gesen vg
    start() {
        console.log(this.color, "ongotei pc aslaa");
    }
}
const pc1 = new Pc("red");
pc1.start();
const pc2 = { asaah: pc1.start, color: "green" };
// pc2.asaah();

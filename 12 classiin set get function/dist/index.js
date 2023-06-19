"use strict";
class Pc {
    constructor(color, _brand, cpu) {
        this.color = color;
        this._brand = _brand;
        this.cpu = cpu;
    }
    get brand() {
        return this._brand;
    }
    getCpu() {
        console.log(this.brand);
    }
    set Brand(brand) {
        this._brand = brand;
    }
    // ene 2 get iin yalgaan gevel negen gadnaas function duudagdan harin deed taliin ungu bol function maygaar bichigdsen ch gesen classs iin gadna bolpublic huvisagch shig haragdana
    start() {
        console.log(this.color, "ongotei pc aslaa");
    }
}
const pc1 = new Pc("red", "lenevo", 8);
pc1.getCpu(); //function
pc1.Brand = "mac"; //set vildel ni gadnaas utga ilgeej dotroh utgiig ootchiloh uyed ashiglana
//set vildel hiigdej private brand iig oorchilood gadnaas get vildeler brand-iig duudaj ashiglaj bn
console.log(pc1.brand); //public huvisagch

"use strict";
class Thing {
    constructor() {
        this.name = "";
    }
}
//abstract class-aar yagaad ogj bgaa ve geheer ene class aas udamshij bgaa class uud bvgd oor ooroor ajildag harin yag gol function-g ni abstact deer tavij ogood udamshij bui classuudad oor oor deer yaj yaj evderdegiin tavij ogno abstract tavij ogvol udamshij bui class d zaaval abstact hiisen function yumuu utga zaaval baih yostoi
//harin udamshij bui class uudad baga huvi ni l adilhan function ashiglaj baival abstract ashiglah hereg baihgui
class Pc extends Thing {
    constructor(color, _brand, cpu) {
        super();
        this.color = color;
        this._brand = _brand;
        this.cpu = cpu;
        Pc.count++;
    }
    break(speed) {
        console.log(speed, "eer evderlee");
    }
    static getCount() {
        return "count of pc" + Pc.count;
    }
    start() {
        console.log(this.color, "ongotei pc aslaa");
    }
}
Pc.count = 0;
const pc1 = new Pc("red", "lenevo", 8);
pc1.break(100);
const pc2 = new Pc("green", "Mac", 8);
pc1.break(50);
console.log(Pc.getCount());
//yamar function g static bailgah ve geheer object ted vl hamaarah tuhain domain deer yamar ch uildel hiisen butsaah utga ni ijil baih Math tai adilhan
//static function ni class aa saa duudagddag harin static bishvvd ni objectoosoo duudagddag

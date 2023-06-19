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
    bodoh() {
        console.log(this.iq + "hvn bodoj bn aa");
    }
}
const amitad = [
    new People(105.99, 90, 2),
    new Dog("banhar", 90, 10, 4),
    new Dog("Bambar", 100, 12, 4),
];
//bvgdenden baihgui gants 2t ni l bgaa elementiig l songoj avch uildel hiih bol ene nii daguu hiine
for (let item of amitad) {
    console.log(item.duugar());
    if ("bodoh" in item) {
        console.log("hun bn aa");
        // item.bodoh();
        //ene tohioldold yagaad ajillahgui bn ve geheer torol ni odooch animal heveere baigaa bolohoor tiimees bid zaaval toroliin huvirgaj shaardlaga garj bnaa
        //doodoh vildel ni item iig maani shuud people type tai bolgood people dotor baidag uildelvvdiig hiij chaddag bolgoj bn ene haaltan dotor bgaa zuils niileed class yum
        item.bodoh();
        //ene argiin ner ni type casting
    }
    if (item instanceof People) {
        // ene arga ni itemiin class name eer ni shalgaj bn
        //ter class dotor bodoh geed function bgaa bolhoor shuud casting hiihguigeer duudad ashiglaj bolno
        item.bodoh();
    }
}

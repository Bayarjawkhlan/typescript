"use strict";
class People {
    constructor(iq, health, weight, foots, nickName
    // props oor avj bgaa uyed optional bish vvdiig optional utguudiin hoino tavibal aldaaa zaana
    ) {
        //anh vvsseneesee hoish oorchillogdohgui utga ni deer readonly type iig tavij ogno
        this.register = 20041224;
        this.iq = iq;
        this.health = health;
        this.weight = weight;
        this.nickName = nickName;
        this.foots = foots;
    }
}
//Yoronhiilon object ruu handhiig hvsvel interface iig ashigladag doorhiig u=vzvvvlsneer objectod ogson interface eer ni bvten  classiin gantshan ter ogson interface eer ni l utga ni butssaj irj bn
const object1 = new People(130, 99, 90);
console.log(object1);
console.log(object1.weight);
const object2 = new People(130, 99, 90);
console.log(object2.weight);
console.log(object2.health);
const object3 = new People(130, 99, 90);
console.log(object3.weight);
console.log(object3.health);
console.log(object3.iq);

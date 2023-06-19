//1
interface Animal {
  health: number;
}

interface Thing {
  weight: number;
}

interface Person extends Animal, Thing {
  iq: number;
}

//interface iin udamshil buyu extends ni olon type uudiig niilvvlj bgaatai adilhan 2 interface iig 1 interface rvv oruulj ogj bn udamshiliin avsan interface ooriinhoo bolon udamshuulj bgaa interface iin ali aliniihan dvremiig avdag bn

//class bolon interface iin extends iin yalgaan class 1 l zuilees udamshij boldog bol harin interface ni olon interface ees udamshij bolno uchirna class dotor code bn harin interface dotor gantshan dvremvvd l baih bolno

//2
interface thing {
  weight: number;
}

interface animal extends thing {
  health: number;
  foots?: number;
}

interface person extends animal {
  iq: number;
}

class People implements person {
  //anh vvsseneesee hoish oorchillogdohgui utga ni deer readonly type iig tavij ogno
  readonly register: number = 20041224;
  iq;
  health;
  weight;
  foots?: number | undefined;
  //zarimdan baij ch bolno esvel baihgui ch baij boloh zuil zol type deer ni optional iig tavij ogsnoor baij ch bolno baijgui baij ch bolno gesen vg
  nickName?: string;

  constructor(
    iq: number,
    health: number,
    weight: number,
    foots?: number | undefined,
    nickName?: string
    // props oor avj bgaa uyed optional bish vvdiig optional utguudiin hoino tavibal aldaaa zaana
  ) {
    this.iq = iq;
    this.health = health;
    this.weight = weight;
    this.nickName = nickName;
    this.foots = foots;
  }
}

//Yoronhiilon object ruu handhiig hvsvel interface iig ashigladag doorhiig u=vzvvvlsneer objectod ogson interface eer ni bvten  classiin gantshan ter ogson interface eer ni l utga ni butssaj irj bn

const object1: thing = new People(130, 99, 90);
console.log(object1)
console.log(object1.weight);

const object2: animal = new People(130, 99, 90);
console.log(object2.weight);
console.log(object2.health);

const object3: person = new People(130, 99, 90);
console.log(object3.weight);
console.log(object3.health);
console.log(object3.iq);

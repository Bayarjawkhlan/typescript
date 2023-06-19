interface Pc {
  cpu: number;
  ram: number;
}

interface Phone {
  brand: string;
  Sim: sim;
}
//

//interface type 2 iin yalgaa bol interface 100% type aguuldag bol type ni dotor oo oor oor utga aguulj chaddag bn a | boolean | (()=>{}) geh met gehdee class deer iim utga tai type iig implement hiih yum bol bolohgui ni todorhoi ajillahgui bas type ni object ch avahgui baij bolno tiim type iig class deer implement hiivel shuud aldaa zaana

//implement hiine gedeg ni type interface uudiig class d abstract maygaar type oghiig helj baih shig bn interface iig ihevchlen class deer ashiglana

type sim = {
  phoneNumber: number;
  operator: string;
  save(dugaar: number): boolean;
};

class SmartPhone implements Phone, Pc {
  cpu = 3;
  ram = 8;
  brand = "mac";
  Sim: sim = {
    phoneNumber: 99119911,
    operator: "unitel",
    save(dugaar) {
      console.log(dugaar);
      return true;
    },
  };
}

const sp = new SmartPhone();
console.log(sp)
const saveBoolean :boolean = sp.Sim.save(99119911);
console.log(saveBoolean)

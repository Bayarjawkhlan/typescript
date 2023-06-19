type Undaa = {
  type: string;
  price: number;
};

type Alim = {
  color: string;
  price: number;
};

class UndaaTor {
  data: [Undaa | null, Undaa | null] = [null, null];

  add(baraa1: Undaa, baraa2: Undaa): void {
    this.data = [baraa1, baraa2];
  }
}

const undaaTor: UndaaTor = new UndaaTor();

const u1: Undaa = {
  type: "fanta",
  price: 2500,
};

const u2: Undaa = {
  type: "cola",
  price: 2500,
};

const a1: Alim = {
  color: "green",
  price: 2500,
};

undaaTor.add(u1, u2);

console.log(undaaTor.data);

//generics

//generics ashiglahiin davuu tal bol duudaj bgaa gaztaas ni type iin avaad ter type aar ni class dotorh valienuudaa hyanana tehgui generics ashiglahgui iim zuild hiivel mash olon type or type or type or geh maygiin type bichij ogood alin orj orj irvel iim yum hiine eder geed esvel gantshan undaand zoriulj undaanii class bicheed alim nd bas oor class bichih hereg garna

class Tor<T> {
  data: T[] = [];

  add(baraa: T): void {
    this.data.push(baraa);
  }
}

const tor: Tor<Undaa | Alim> = new Tor();

tor.add(u1);
tor.add(a1);
tor.add(u2);

console.log(tor.data);

interface thing {
  weight: number;
}

interface animal extends thing {
  health: number;
  foots?: number;
  duugar(): string;
}

interface person extends animal {
  iq: number;
}

class Dog implements animal {
  duugar(): string {
    return this.name + " iim nertei nohoi dugarlaa";
  }
  constructor(
    public name: string,
    public health: number,
    public weight: number,
    public foots?: number
  ) {}
}

class People implements person {
  readonly register: number = 20041224;
  duugar(): string {
    return this.iq + "iim iq tai hvn dugarlaa ";
  }

  constructor(
    public iq: number,
    public health: number,
    public weight: number,
    public foots?: number | undefined,
    public nickName?: string
  ) {}
}

const amitad: animal[] = [
  new People(105.99, 90, 2),
  new Dog("banhar", 90, 10, 4),
  new Dog("Bambar", 100, 12, 4),
];

//ajiliig hongovchloh vvregtei l gej oilgoloo

for (let item of amitad) {
  console.log(item.duugar());
}

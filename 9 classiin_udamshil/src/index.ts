class Pc {
  public color: string;
  private brand: string;
  protected cpu: number = 0;

  //public ni gadnaas hvssesneeree handah bolomjtoi
  // harin private ni udamshisan hesegten hvrtel orohgui uchir ni boldoggui udamshsan hesegten avahiig hvsvel protected iig ashiglana

  constructor(color: string) {
    this.brand = "lenovo";
    console.log(this.cpu);
    console.log(this.brand);
    this.color = color;
    console.log(color);
    this.start();
  }

  start() {
    console.log(this.color, "ongotei pc aslaa");
  }
}

class Laptop extends Pc {
  constructor(color: string) {
    super(color);
  }

  charge() {
    console.log(this.color + "1");
    console.log(this.cpu, "haaha");
  }
}

const pc1 = new Pc("red");
const l1 = new Laptop("Blue");

l1.charge();

class Pc {
  public color: string;
  private brand: string = "lenovo";
  protected cpu: number = 0;

  constructor(color: string) {
    this.color = color;
  }

  //zonvhon typescript  baidag  arga  ingeh yum bol duriin neg utga ene start fundtiong ashiglaj chadahgui  ingej hamgaalj ogohgui bol  hamgiin dood taliin morond baigaa shig duudaad ashiglaad undifiened console dood baina gesen vg
  start(this: Pc) {
    console.log(this.color, "ongotei pc aslaa");
  }
}

const pc1 = new Pc("red");
pc1.start();

const pc2 = { asaah: pc1.start, color: "green" };
// pc2.asaah();

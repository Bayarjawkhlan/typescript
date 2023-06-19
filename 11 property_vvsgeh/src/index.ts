class Pc {
  //constructor dotor ingej bichih ni 3 ni gazar adil yum bichihiig hongovchilj ogj bui code yum ingej bichihgui bol deeree hooson huvisagch neegeed props deeree gadnaas irj bui huvisagchaa avaad daraan this.color = color geh maygaar bichih ajiliig hongovchilson

  constructor(
    public color: string,
    private brand: string,
    protected cpu: number
  ) {}

  start(this: Pc) {
    console.log(this.color, "ongotei pc aslaa");
  }
}

const pc1 = new Pc("red", "lenevo", 8);
console.log(pc1.color);

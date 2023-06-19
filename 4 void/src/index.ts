type Unit = "MB" | "GB" | "TB";

type Pc = {
  name: string;
  year: number;
  hd: [number, string];
  // ene dood taliin uildel ni add ni function type tai props uudiinhan toroliin zaaj ogood number butsaan gej zaaj bn

  //butsaaj bgaa utga zaaval baih yostoi connsole.log(baij bolohgui)
  minus?: (a: number, b: string) => number;

  //Void type ni Utga butsaahgui gedgiin zaaj ogjiigoo
  add: (a: number, b: number) => void;
};

let Pc1: Pc = {
  name: "imac",
  year: 2020,
  hd: [256, "GB"],

  //Herev function deer Void toroliin tavij ogohgui bol return hiij boldog yamar negen utgiig ter zamiin haaj ogohiin tuld Void toroliig zaaval tavij ogoh heregtei
  add: (a: number, b: number) => {
    console.log(a + b);
  },
  minus: (a: number, b: string) => {
    return a;
  },
};

console.log(Pc1.add(4, 9));

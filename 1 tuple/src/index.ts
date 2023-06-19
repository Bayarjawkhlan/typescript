type Unit = "MB" | "GB" | "TB";

type Pc = {
  name: string;
  year: number;
  hd: [number, string];
};

let Pc: Pc = {
  name: "imac",
  year: 2020,
  hd: [256, "GB"],
};

let passport: ["er" | "em", number] = ["em", 1];

console.log(passport);

passport = ["em", 12];
passport[1] = 2;
console.log(passport[1]);

console.log(Pc);

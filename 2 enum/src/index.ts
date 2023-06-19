enum Unit {
  Mb = "Mb",
  Gb = "Gb",
  Tb = "Tb",
}

enum HTTP_Reponse {
  result_ok = 200,
  not_found = 401,
  unauthoriliez = 403,
}

type Pc = {
  name: string;
  year: number;
  hd: [number, Unit, "ssd" | "hdd"];
};

let Pc1: Pc = {
  name: "Imac",
  year: 2020,
  hd: [256, Unit.Gb, "ssd"],
};

let x: ["er" | "em", number, { x: number; units: Unit[] }];
x = ["er", 2004, { x: 1224, units: [Unit.Tb, Unit.Mb] }];

if (Pc1.hd[1] === Unit.Gb) {
  console.log(x[2].units[0]);
}

let array: [string, number, boolean] = ["haha", 2, true];
array[2] = false;

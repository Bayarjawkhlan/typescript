type X = string | number;

//Bi eniig yag hezee ashiglahiig yostoi oilgohgui bgaach key bolon utga 2 ni bainga ijil type aar baih bol ingej ogj bolno

type Foo = {
  [property: string]: X;
};

const a: Foo = {
  name: 18,
  3: "1",
  //key ni number baigaa uyed  ( a.3 )  gej handaj bolohgui tiimees [] massive aar ch gesen handaj bolno ene object iin key bolgono ni massive iin index gej oilgooj bolno tiimees [3] gej handaj bolno gesen vg
};

console.log(a.name);
console.log(a["name"]);
console.log(a[3]);
console.log(a["3"]);

type Employee = {
  id: string;
  name: string;
  // Ene type iin ilerhiilj baigaa utga ni id bolon name ni l todorhoi gehdee ternees gadna heden ch utga baij bolno gehdee ternii key ni string utga ni string baihaar
  [property: string]: string;
};

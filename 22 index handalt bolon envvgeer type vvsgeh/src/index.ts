type Person = {
  name: string;
  age: number;
  alive?: boolean;
};

// Oor torol iin index dehi torol iin type iig avaad Age gedeg type d onooj ogooj baina
type Age = Person["age"];

//bolohgui zuil ehlel

const strAge = "age";

// type errorAge = Person[strAge];
//ene deed hesegiig harval Person ii [] index d huvisasgch ogj bolohgui zovkhon str ee geel ogno oo

//bolohgui zuil duusah

const age: Person["age"] = 10;

const ageName: Person["age" | "name"] = "Bayraa";

//20 dahi folder deer baigaa keyof iin hicheel dehi type iin utga bolgoniig avdag zuiliig ashiglaval Person type iin ali 1 type iiihan type tai tentsej baival bolno
const allIndex1: Person[keyof Person] = "Bayraa";

// ====

type personKey = keyof Person;
const allIndex2: Person[keyof Person] = 18;

const MyArray = [
  {
    name: "Alice",
    age: 15,
  },
  {
    name: "Tom",
    age: 18,
  },
  {
    name: "Barry",
    age: 49,
  },
];

type User = (typeof MyArray)[number];
type UserAge = (typeof MyArray)[number]["age"];

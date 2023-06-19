//herev overload function ii type gantshan baival ingej bichij ogj bolno bogino huvilbar
type FilterFunction = <T>(array: T[], fn: (item: T) => boolean) => T[];

//
//type FilterFunction = {
//<T>(array: T[], fn: (item: T) => boolean): T[];
//};
//

//gehdeee yagaad zaaval overload function type iig ashiglah shaardlagatai ve geheer olon filter function baival terenden taaruulad neg type aar bvgden deer ni yavj bolno gehdee odoo 1 l type tai bolohoor dood taliin filter deer ustagsan bgaa

const filter: FilterFunction = <T>(array: T[], fn: Function): T[] => {
  let result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (fn(item)) result.push(item);
  }

  return result;
};

let strings = ["cat", "dog", "mouse", "mat"];
function fn(item: string): boolean {
  return item === "cat";
}

//arai oor bichiglel

//ene bidnii meddeg react deer ogdog generics type baina herev bid engej ogvol ene function zovkhon ter hoino ni tavisan type iig hvleen avdag ter type aar shalgaltaa hiideg bolchihno

//ene arga ni hoino ingej tavisnaar tend tavisan gants type aar l hoino oo ashiglaj bolno deed taliin generics bol yamarch hamaagui typetai yum orj irsen hamagui bvgdiin ter type aar hiideg harin ene bol heden ch type iig shalgaj bolno gehdee ooriinhoo hvssen iig

type FilterFunction2<T> = {
  (array: T[], fn: (item: T) => boolean): T[];
};

const filter2: FilterFunction2<number> = <T>(array: T[], fn: Function): T[] => {
  let result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (fn(item)) result.push(item);
  }

  return result;
};

let strings2 = ["cat", "dog", "mouse", "mat"];
function fn2(item: string): boolean {
  return item === "cat";
}

//@ts-ignore

console.log(filter2(strings2, fn2));

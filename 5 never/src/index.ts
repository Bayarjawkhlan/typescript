//javascript maani void function aas utga butsaahgui uyed tsanaasaa undifined utga butsaadag

//Void function bol ter function duustal yavdag harin

//Never type-tai function bvvr undifined utga ch butsaadaggui ter function-aas

//Never type-iin davaa tal

let x: never;
let y: never;

const hello = () => {
  console.log(1);
  throw new Error();
  // End ireed function bvvr duusaj bn
  console.log(1);
};

type Square = {
  type: "square";
  size: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type Shape = Rectangle | Square;

const area = (shape: Shape) => {
  if (shape.type === "square") {
    return shape.size * shape.size;
  } else if (shape.type === "rectangle") {
    return (shape.width * shape.height) / 2;
  }
  shape;

  //End ingej never torol tavij ogohiin davuu tal bol daraan bi type aa bvren shalgahgui geer duusgaval aldaa zaaj ogno

  //Bas Shape deer shine type nemj ogvol nadad aldaa zaaj ogon end type aa bvren shalgana uu gedgiig sanuulj ogoh vvregtei hezee negen tsagt code orogjin type nemegdeh ni oilgomjtoi tul ingej ogsnoor daraan aldaag mash hurdan oloh bolomjtoi

  const nuhtsuluuShalga: never = shape;
};

const addEmpty = () => {
  return 0;
};

const addItSelf = (a: number) => {
  return a + a;
};

const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

// console.log(addEmpty());
// console.log(addTwoNumbers(10, 10));

//olon torliin function bichihguigeer 1 function ashiglahiig overloaded function gene

//implement hiigdeegui zgr function geed tavisan heseg bol nadad irj boloh bvh torliin utguud yum yag implement hiigdej bgaa heseg deeree avjiigaa propsuudaa bvgdiin optional bolgoj ogood implement heseg deeree iim baival tegj ajilna geed bichij ogno

function add(): number;
function add(a: number): number;
function add(a: number, b: number): number;
function add(a?: number, b?: number): number {
  if (a === undefined) return 0;
  if (b === undefined) return a + a;

  return a + b;
}

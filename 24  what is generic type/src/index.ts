//overload

function logData(data: number): number;
function logData(data: string): string;
function logData(data: boolean): boolean;
function logData(data: number | boolean | string): boolean | string | number {
  console.log("data ==>" + data);

  return data;
}

console.log(logData("Hi").toUpperCase());

//overload ashiglahiin 1 davuu tal ni string orj irvel string bitsaana gej helj ogsnoor string deer ashiglaj boloh function uud maani ajilna overload hiihgui shuud ingeed 3 type butsahaar ni bichchivel alin ch orood irj magadgui uchir ajillahgui

//normal function

function logDataWOoverload(
  data: number | boolean | string
): number | boolean | string {
  console.log("data ==>" + data);

  return data;
}

// console.log(logDataWOoverload("Hi").toUpperCase());

//Generics

//<X> bol type variable buyu type hivisagch yum baina function duu yamar utga ilgeen teriin barij avaad data nii type butsaah type deer ni ali alin deer ni tavij ogson
function logDataGenerics<X>(data: X): X {
  console.log("data:" + data);

  return data;
}

console.log(logDataGenerics("Hi").toUpperCase());

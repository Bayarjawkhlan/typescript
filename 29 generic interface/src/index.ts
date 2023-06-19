type tupleFunciton = <T, U>(a: T, b: U) => [T, U];

interface TupleObject<T, U> {
  a: T;
  b: U;

  //deed taliin generic dotor <O> gej duudahguigeer getTuple deeree <Generic> ee duudval ilvv local bolj object deeree yag yuu baih yostoi gej zaahguigeer yamarch utga damjuulj chadna <T,U> bol dood object oosoo type iin avdag bid tendeesee type avalgui ilvv orgon hvreenii ashiglah bolomjtoi function bichlee

  getTuple<O>(a: O): [T, U, O];
}

let tupleObject: TupleObject<number, number> = {
  a: 20,
  b: 30,
  getTuple<O>(a: O) {
    return [this.a, this.b, a];
  },
};

console.log(tupleObject.getTuple("a"));

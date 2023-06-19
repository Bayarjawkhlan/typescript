let x: unknown[] = [];

x[0] = 1;

x[1] = () => {
  console.log("haha");
};
if (typeof x[1] === "function") x[1]();

//unknown type ni any tai tostei ch gesen utga oghod bol yamarch hammagu type tai utga ogchood ashiglah uyed type iin batalgaajuulaagui tohioldold ashiglahiig hoeiglodog baghan ch gesen typescript iin shalgalt hiigdej bgaa gesen vg

console.log(x[0]);

let y: any[] = [];

y[1] = 2;
y[1] = "jaa";

y[0] = () => {
  console.log(y[1]);
};

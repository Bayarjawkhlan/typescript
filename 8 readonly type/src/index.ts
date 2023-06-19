type Phone = {
  brand: string;
  Number: string;
  readonly imei: string;
};

const p1: Phone = {
  brand: "Mac",
  Number: "94932436",
  imei: "Ene type iig zovhon ehleed ogson utgaar ni l bailgadag",
};

// Daraan readonly type tai huvisagch ruu utga ogoh bolomjiig haadag deer ni asuudalgui hevelne

console.log(p1.imei);

type Pc = {
  cpu: number;
  ram: number;
};

type Phone = {
  brand: string;
  Number: string;
};

//Ene ni 2 type iin type-uudiig niiluulen 1 type bolgodog arga yum

//Vvnees harhad olon jijig type vvsgesen ni ilvv heregtei bgaaz uciir ni daraan ter jijig type uudaa niiluulen 1 type bolgodog

type Smartphone = Pc &
  Phone & {
    gps: boolean;
  };

const p1: Smartphone = {
  cpu: 3.5,
  ram: 8,
  brand: "Mac",
  Number: "94932436",
  gps: true,
};

// ene yagaad aldaa zaaj bn ve geher 2 type niilsnees 1 type ni baihgui bn
const p2: Smartphone = {
  cpu: 3.5,
  ram: 8,
  brand: "Mac",
  // Number: "94932436",
  // gps: true,
};

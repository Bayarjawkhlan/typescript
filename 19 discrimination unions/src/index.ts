enum DeviceType {
  CAR,
  LAPTOP,
}

interface MoveAble {
  type: DeviceType.CAR;
  move(speed: number): void;
}

interface ChargeAble {
  type: DeviceType.LAPTOP;
  charge(sec: number): void;
}

type WirelessChargeAble = MoveAble | ChargeAble;

const car: MoveAble = {
  type: DeviceType.CAR,
  move(speed: number): void {
    console.log(speed + "hurdaar hodolj baina");
  },
};

const laptop: ChargeAble = {
  type: DeviceType.LAPTOP,
  charge(sec: number): void {
    console.log(sec + "secound tseneglej baina");
  },
};

const devices: WirelessChargeAble[] = [car, laptop];

for (let item of devices) {
  switch (item.type) {
    case DeviceType.CAR: {
      (item as MoveAble).move(50);
      break;
    }

    case DeviceType.LAPTOP: {
      (item as ChargeAble).charge(30);
      break;
    }
  }
}

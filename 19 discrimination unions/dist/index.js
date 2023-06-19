"use strict";
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["CAR"] = 0] = "CAR";
    DeviceType[DeviceType["LAPTOP"] = 1] = "LAPTOP";
})(DeviceType || (DeviceType = {}));
const car = {
    type: DeviceType.CAR,
    move(speed) {
        console.log(speed + "hurdaar hodolj baina");
    },
};
const laptop = {
    type: DeviceType.LAPTOP,
    charge(sec) {
        console.log(sec + "secound tseneglej baina");
    },
};
const devices = [car, laptop];
for (let item of devices) {
    switch (item.type) {
        case DeviceType.CAR: {
            item.move(50);
            break;
        }
        case DeviceType.LAPTOP: {
            item.charge(30);
            break;
        }
    }
}

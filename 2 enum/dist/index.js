"use strict";
var Unit;
(function (Unit) {
    Unit["Mb"] = "Mb";
    Unit["Gb"] = "Gb";
    Unit["Tb"] = "Tb";
})(Unit || (Unit = {}));
var HTTP_Reponse;
(function (HTTP_Reponse) {
    HTTP_Reponse[HTTP_Reponse["result_ok"] = 200] = "result_ok";
    HTTP_Reponse[HTTP_Reponse["not_found"] = 401] = "not_found";
    HTTP_Reponse[HTTP_Reponse["unauthoriliez"] = 403] = "unauthoriliez";
})(HTTP_Reponse || (HTTP_Reponse = {}));
let Pc1 = {
    name: "Imac",
    year: 2020,
    hd: [256, Unit.Gb, "sdd"],
};
let x;
x = ["er", 2004, { x: 1224, units: [Unit.Tb] }];
if (Pc1.hd[1] === Unit.Gb) {
    console.log(x[2].units[0]);
}
let array = ["haha", 2, true];
array[2] = false;

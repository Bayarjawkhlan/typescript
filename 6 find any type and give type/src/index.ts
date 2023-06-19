let json = '{"x":250,"y":150}';

// ene dood taliin coordinate iin type bol any bgaa bid code ni dotor oo any toroliiin huvisagch zaralj yorn bol bolohgui ali boloh l type iin tavij ogoh shaarlagatai uchir ni type iin tavij ogooguigees shaltgaalan baihgui bgaa huvisagch butsaahaas ehlen esvel propsoor maani boolean ch yumuu orj ireh magdlaltai ter tohioldold runtime error garan server zogsoh ayultai any torol baih l yum  bol type aa tavij ogoorei
let coordinate = JSON.parse(json);
console.log(coordinate.Y);

let coordinate1: { x: number; y: number } = JSON.parse(json);
console.log(coordinate);

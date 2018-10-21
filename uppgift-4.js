function getSphere(r){
   let volume = (4 * Math.PI * Math.pow(r, 3))/3;
   let area = 4 * Math.PI * Math.pow(r, 2);
   let sphereSize = [volume.toFixed(1), area.toFixed(1)];
   return sphereSize
}
let sphere = getSphere(11);

console.log(`Sfärens volym är ${sphere[0]} cm3 och sfärens area är ${sphere[1]} cm2`);
/* Funktionen räknar ut area och volym utifrån sfärens radie */
function getSphere(r){
   let volume = (4 * Math.PI * Math.pow(r, 3))/3;
   let area = 4 * Math.PI * Math.pow(r, 2);
   /* Variablerna volym och area läggs i en array för att båda ska kunna returneras ur funktionen 
   Värdena som returneras begränsas till en decimal för tydligare presentation*/
   let sphereSize = [volume.toFixed(1), area.toFixed(1)];
   return sphereSize
}
/* Variabel som kör funktionen med det värde som matas in i pompten
så att funktionen endast behöver köras en gång */
let sphere = getSphere(5);

/*Sfärens volym är x cm3 och sfärens area är x cm2*/
console.log(`Sfärens volym är ${sphere[0]} cm3 och sfärens area är ${sphere[1]} cm2`);
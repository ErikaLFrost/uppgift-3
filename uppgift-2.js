let nr1 = 4;
let nr2 = 3;

function pyth(a, b){
   let c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(c);
}

console.log(pyth(nr1, nr2));
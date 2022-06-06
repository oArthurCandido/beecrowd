var input = require('fs').readFileSync('./stdin', 'utf8');
var numeros = Number(input);
const pi = 3.14159;
function circleMat(numeros, pi) {
  let A = (4.0 / 3) * pi * numeros ** 3;
  console.log(`VOLUME = ${A.toFixed(3)}`);
}
circleMat(numeros, pi);

var input = require('fs').readFileSync('./stdin', 'utf8');
var numeros = Number(input);
const pi = 3.14159;
function circleMat(numeros, pi) {
  let A = pi * numeros ** 2;
  console.log(`A=${A.toFixed(4)}`);
}
circleMat(numeros, pi);

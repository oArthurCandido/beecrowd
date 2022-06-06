var input = require('fs').readFileSync('./stdin', 'utf8');
var numeros = input.split('\n');

const A = Number(numeros[0]);
const B = Number(numeros[1]);

function soma(A, B) {
  const X = A + B;
  console.log(`X = ${X}`);
}

soma(A, B);

var input = require('fs').readFileSync('./stdin', 'utf8');
var numeros = input.split('\n');

var A = Number(numeros[0]);
var B = Number(numeros[1]);
var PROD = A * B;

console.log(`PROD = ${PROD}`);

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0];
var line2 = lines[1];
var splitLine1 = line1.split(' ');
var splitLine2 = line2.split(' ');
var prod1 = Number(splitLine1[1]) * Number(splitLine1[2]);
var prod2 = Number(splitLine2[1]) * Number(splitLine2[2]);
var soma = prod1 + prod2;

console.log(`VALOR A PAGAR: R$ ${soma.toFixed(2)}`);

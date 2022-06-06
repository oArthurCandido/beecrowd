var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);
var D = Number(lines[3]);

var DIFERENCA = A * B - C * D;
console.log(`DIFERENCA = ${DIFERENCA}`);

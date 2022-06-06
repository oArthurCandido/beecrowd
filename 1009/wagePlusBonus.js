var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[1]) + Number(lines[2] * 0.15);
console.log(`TOTAL = R$ ${A.toFixed(2)}`);

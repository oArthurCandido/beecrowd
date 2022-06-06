var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var wage = B * C;
console.log(`NUMBER = ${A}`);
console.log(`SALARY = U$ ${wage.toFixed(2)}`);

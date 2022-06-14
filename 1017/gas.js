var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var horas = Number(lines[0]);
var speed = Number(lines[1]);
var conta = (speed * horas) / 12;
console.log(conta.toFixed(3));

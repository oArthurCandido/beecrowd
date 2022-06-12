var input = require('fs').readFileSync('./stdin', 'utf8');
var inputs = input.split(' ');
var a = Number(inputs[0]);
var b = Number(inputs[1]);
var c = Number(inputs[2]);

var maiorAB = (a + b + Math.abs(a - b)) / 2;

var maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorABC} eh o maior`);

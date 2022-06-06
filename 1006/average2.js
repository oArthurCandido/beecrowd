var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);

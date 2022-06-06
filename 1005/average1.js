var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);

var MEDIA = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);

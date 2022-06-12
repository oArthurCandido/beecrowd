var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(/[\r, \n]+/);

var x1 = lines[0];
var y1 = lines[1];
var x2 = lines[2];
var y2 = lines[3];

var dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(dist.toFixed(4));

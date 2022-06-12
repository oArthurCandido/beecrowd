var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var kms = Number(lines[0]);
var liters = Number(lines[1]);
var consumption = kms / liters;
console.log(`${consumption.toFixed(3)} km/l`);

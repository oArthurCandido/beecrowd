var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var distance = lines[0];
console.log(`${distance * 2} minutos`);

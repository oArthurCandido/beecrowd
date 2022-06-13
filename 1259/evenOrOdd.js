var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var par = [];
var impar = [];

for (let i = 1; i < lines.length; i++) {
  if (lines[i] % 2 === 0) {
    par.push(lines[i]);
  } else {
    impar.push(lines[i]);
  }
}

impar.sort(function (a, b) {
  return b - a;
});

par.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < par.length; i++) {
  console.log(`${par[i]}`);
}

for (let i = 0; i < impar.length; i++) {
  console.log(impar[i]);
}

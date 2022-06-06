var input = require('fs').readFileSync('./stdin', 'utf8');
var params = input.split(' ');
var A = Number(params[0]);
var B = Number(params[1]);
var C = Number(params[2]);
var triangulo = (A * C) / 2;
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
var pi = 3.14159;
var circulo = pi * C ** 2;
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
var trapezio = ((A + B) * C) / 2;
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
var quadrado = B * B;
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
var retangulo = A * B;
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

/*a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.*/

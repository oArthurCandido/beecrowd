var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var valor = Number(lines[0]);
let cedula = [
  100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01
];
let aux = 0;
console.log('NOTAS:');
for (let i = 0; i < 6; i++) {
  aux = Math.floor(valor / cedula[i]);
  console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`);
  valor = valor % cedula[i];
}
console.log('MOEDAS:');
for (let j = 6; j < cedula.length; j++) {
  aux = Math.floor(valor / cedula[j]);
  console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`);
  valor = (valor % cedula[j]) + 0.00001;
}

// console.log('NOTAS:');
// var resto = cash % 100;
// var cash = Math.floor(cash / 100);
// console.log(`${cash} nota(s) de R$ 100.00`);
// var cash = Math.floor(resto / 50);
// console.log(`${cash} nota(s) de R$ 50.00`);
// var resto = resto % 50;
// var cash = Math.floor(resto / 20);
// console.log(`${cash} nota(s) de R$ 20.00`);
// var resto = resto % 20;
// var cash = Math.floor(resto / 10);
// console.log(`${cash} nota(s) de R$ 10.00`);
// var resto = resto % 10;
// var cash = Math.floor(resto / 5);
// console.log(`${cash} nota(s) de R$ 5.00`);
// var resto = resto % 5;
// var cash = Math.floor(resto / 2);
// console.log(`${cash} nota(s) de R$ 2.00`);
// var resto = resto % 2;
// var moedas = Math.floor(resto / 1);
// console.log('MOEDAS:');
// console.log(`${moedas} moeda(s) de R$ 1.00`);
// var resto = resto % 1;
// var moedas = Math.floor(resto / 0.5);
// console.log(`${moedas} moeda(s) de R$ 0.50`);
// var resto = resto % 0.5;
// var moedas = Math.floor(resto / 0.25);
// console.log(`${moedas} moeda(s) de R$ 0.25`);
// var resto = resto % 0.25;
// var moedas = Math.floor(resto / 0.1);
// console.log(`${moedas} moeda(s) de R$ 0.10`);
// var resto = resto % 0.1;
// var moedas = Math.floor(resto / 0.05);
// console.log(`${moedas} moeda(s) de R$ 0.05`);
// var resto = resto % 0.05;
// var moedas = Math.floor(resto / 0.01);
// console.log(`${moedas} moeda(s) de R$ 0.01`);

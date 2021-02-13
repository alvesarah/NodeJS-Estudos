// function soma(a, b){
//     return a+b;
// }

// function sub(a, b){
//     return a-b;
// }

// function multi(a, b){
//     return a*b;
// }

// function div(a, b){
//     return a/b;
// }

// console.log(sub(2,4));

var somaFunc = require("./somar");
var subFunc = require("./subtrair");
var multiFunc = require("./multiplicar");
var divFunc = require("./dividir");

console.log(somaFunc(1,2));
console.log(subFunc(10,5));
console.log(multiFunc(1,2));
console.log(divFunc(1,2));
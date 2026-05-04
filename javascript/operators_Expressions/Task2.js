const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));

console.log("Greater than:", num1 > num2);
console.log("Less than:", num1 < num2);
console.log("Equal:", num1 == num2);
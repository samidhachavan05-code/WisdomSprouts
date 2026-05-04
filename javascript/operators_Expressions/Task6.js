const prompt = require("prompt-sync")();

let length = parseFloat(prompt("Enter length: "));
let width = parseFloat(prompt("Enter width: "));

let perimeter = 2 * (length + width);
let area = length * width;

console.log("Perimeter:", perimeter);
console.log("Area:", area);
console.log("Perimeter > Area:", perimeter > area);
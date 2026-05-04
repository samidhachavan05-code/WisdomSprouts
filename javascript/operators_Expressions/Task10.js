const prompt = require("prompt-sync")();

let total = parseFloat(prompt("Enter total amount: "));

if (total > 100) {
    total -= total * 0.10;
}

console.log("Discounted total:", total);
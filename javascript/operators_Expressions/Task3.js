const prompt = require("prompt-sync")();

let math = parseFloat(prompt("Enter Math marks: "));
let science = parseFloat(prompt("Enter Science marks: "));

let eligible = (math >= 90) && (science >= 85);

console.log("Scholarship Eligible:", eligible);
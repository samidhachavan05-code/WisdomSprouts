const prompt = require("prompt-sync")();

let weight = parseFloat(prompt("Enter weight (kg): "));
let height = parseFloat(prompt("Enter height (m): "));

let bmi = weight / (height * height);

console.log("BMI:", bmi);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi <= 24.9) {
    console.log("Normal");
} else if (bmi <= 29.9) {
    console.log("Overweight");
} else {
    console.log("Obesity");
}
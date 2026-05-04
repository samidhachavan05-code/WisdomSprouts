const prompt = require("prompt-sync")();

let age = parseInt(prompt("Enter age: "));
let citizen = prompt("Are you citizen (true/false): ") === "true";

let canVote = (age >= 18) && citizen;

console.log("Eligible to vote:", canVote);
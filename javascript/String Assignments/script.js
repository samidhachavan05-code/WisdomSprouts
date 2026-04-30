function getText() {
    return document.getElementById("inputText").value;
}

function show(res) {
    document.getElementById("result").innerText = res;
}

// 1. Count vowels
function countVowels() {
    let text = getText().toLowerCase();
    let count = 0;

    for (let ch of text) {
        if ("aeiou".includes(ch)) count++;
    }

    show("Vowels: " + count);
}

// 2. Palindrome
function checkPalindrome() {
    let text = getText().toLowerCase().replace(/[^a-z0-9]/g, "");
    let rev = text.split("").reverse().join("");

    show(text === rev ? "Palindrome" : "Not Palindrome");
}

// 3. First word
function firstWord() {
    let text = getText().trim();
    let word = text.split(" ")[0];

    show("First word: " + word);
}

// 4. Replace spaces
function replaceSpaces() {
    let text = getText();
    show(text.replace(/ /g, "-"));
}

// 5. Split words
function splitWords() {
    let text = getText();
    show(text.split(" ").join(", "));
}

// 6. Title case
function titleCase() {
    let words = getText().toLowerCase().split(" ");

    let result = words.map(w =>
        w.charAt(0).toUpperCase() + w.slice(1)
    );

    show(result.join(" "));
}

// 7. Reverse (manual)
function reverseString() {
    let text = getText();
    let rev = "";

    for (let i = text.length - 1; i >= 0; i--) {
        rev += text[i];
    }

    show(rev);
}

// 8. Count specific character
function countChar() {
    let text = getText();
    let ch = prompt("Enter character:");
    let count = 0;

    for (let c of text) {
        if (c === ch) count++;
    }

    show("Count of '" + ch + "': " + count);
}

// 9. Remove special characters
function removeSpecial() {
    let text = getText();
    show(text.replace(/[^a-zA-Z0-9 ]/g, ""));
}

// 10. Start and End same
function sameStartEnd() {
    let text = getText().trim();

    if (text.length === 0) {
        show("Empty input");
        return;
    }

    let first = text[0];
    let last = text[text.length - 1];

    show(first === last ? "Same" : "Different");
}
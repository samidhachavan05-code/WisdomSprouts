// Q1)Write a function to count the number of words in a sentence.


function countWords(sentence) {
    return sentence.trim().split(" ").length;
}
console.log(countWords("Hello how are you"));

//Q2) Write a program to find the longest word in a given string.

function longestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("I love programming SAMIDHACHAVAN"));

// Q3) Write a function to remove falsy values from an array.

function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy([0, "Hello", false, "", 25, null]));

// Q4). Write a program to find the second largest number in an array.

function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log(secondLargest([10, 20, 30, 40, 50]));

// Q5). Write a program to sort an array without using the built-in sort() method
function sortArray(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([5, 2, 9, 1, 3]));
function print(msg) {
    document.getElementById("output").innerText += msg + "\n";
}

function runProgram() {
    document.getElementById("output").innerText = "";

    let choice = parseInt(prompt(`
Choose Program:
1 Number Checker
2 Multiplication Table
3 Guessing Game
4 Even Numbers
5 Sum of Digits
6 FizzBuzz
7 Prime Number
8 Star Pattern
9 Largest of 3
10 Palindrome
11 Vowels & Consonants
12 Reverse Number
13 Sum Odd/Even
14 Factorial
15 Average
16 Leap Year
17 Divisors
18 Fibonacci
19 Armstrong Number
20 Number Pyramid
`));

    switch (choice) {

        case 1:
            let num = parseInt(prompt("Enter number:"));
            if (num > 0) print("Positive");
            else if (num < 0) print("Negative");
            else print("Zero");
            break;

        case 2:
            let n = parseInt(prompt("Enter number:"));
            for (let i = 1; i <= 10; i++) {
                print(n + " x " + i + " = " + (n * i));
            }
            break;

        case 3:
            let sys = Math.floor(Math.random() * 10) + 1;
            let g;
            do {
                g = parseInt(prompt("Guess 1-10:"));
                if (g < sys) print("Too low");
                else if (g > sys) print("Too high");
            } while (g !== sys);
            print("Correct!");
            break;

        case 4:
            for (let i = 2; i <= 20; i += 2) print(i);
            break;

        case 5:
            let number = parseInt(prompt("Enter number:"));
            let sum = 0;
            while (number > 0) {
                sum += number % 10;
                number = Math.floor(number / 10);
            }
            print("Sum: " + sum);
            break;

        case 6:
            for (let i = 1; i <= 50; i++) {
                if (i % 3 === 0 && i % 5 === 0) print("FizzBuzz");
                else if (i % 3 === 0) print("Fizz");
                else if (i % 5 === 0) print("Buzz");
                else print(i);
            }
            break;

        case 7:
            let p = parseInt(prompt("Enter number:"));
            let prime = true;
            for (let i = 2; i < p; i++) {
                if (p % i === 0) {
                    prime = false;
                    break;
                }
            }
            print(prime ? "Prime" : "Not Prime");
            break;

        case 8:
            for (let i = 1; i <= 5; i++) {
                let row = "";
                for (let j = 1; j <= i; j++) row += "* ";
                print(row);
            }
            break;

        case 9:
            let a = +prompt("Enter a:");
            let b = +prompt("Enter b:");
            let c = +prompt("Enter c:");
            print("Largest: " + Math.max(a, b, c));
            break;

        case 10:
            let str = prompt("Enter string:");
            let rev = str.split("").reverse().join("");
            print(str === rev ? "Palindrome" : "Not Palindrome");
            break;

        case 11:
            let text = prompt("Enter string:").toLowerCase();
            let v = 0, cons = 0;
            for (let ch of text) {
                if ("aeiou".includes(ch)) v++;
                else if (ch >= 'a' && ch <= 'z') cons++;
            }
            print("Vowels: " + v);
            print("Consonants: " + cons);
            break;

        case 12:
            let rnum = parseInt(prompt("Enter number:"));
            let revNum = 0;
            while (rnum > 0) {
                revNum = revNum * 10 + (rnum % 10);
                rnum = Math.floor(rnum / 10);
            }
            print("Reversed: " + revNum);
            break;

        case 13:
            let even = 0, odd = 0;
            for (let i = 1; i <= 100; i++) {
                if (i % 2 === 0) even += i;
                else odd += i;
            }
            print("Even Sum: " + even);
            print("Odd Sum: " + odd);
            break;

        case 14:
            let f = parseInt(prompt("Enter number:"));
            let fact = 1;
            while (f > 0) {
                fact *= f;
                f--;
            }
            print("Factorial: " + fact);
            break;

        case 15:
            let count = parseInt(prompt("How many numbers?"));
            let total = 0;
            for (let i = 0; i < count; i++) {
                total += parseInt(prompt("Enter number:"));
            }
            print("Average: " + (total / count));
            break;

        case 16:
            let year = parseInt(prompt("Enter year:"));
            let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            print(leap ? "Leap Year" : "Not Leap Year");
            break;

        case 17:
            let d = parseInt(prompt("Enter number:"));
            for (let i = 1; i <= d; i++) {
                if (d % i === 0) print(i);
            }
            break;

        case 18:
            let terms = parseInt(prompt("Enter terms:"));
            let x = 0, y = 1;
            print(x);
            print(y);
            for (let i = 3; i <= terms; i++) {
                let next = x + y;
                print(next);
                x = y;
                y = next;
            }
            break;

            case 19:
    let num19 = parseInt(prompt("Enter a number:"));
    let temp = num19;
    let sum19 = 0;
    let digits = num19.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum19 += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum19 === num19) {
        print("Armstrong Number");
    } else {
        print("Not an Armstrong Number");
    }
    break;



    case 20:
    let rows = parseInt(prompt("Enter number of rows:"));

    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        print(row);
    }
    break;

        default:
            print("Invalid choice");
    }
}
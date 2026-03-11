function printSquare(n){
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        row += '*  ';
    }
    console.log(row);
}

}
console.log('printSquare')
printSquare(5)






// function printSquare(n){
//     for(i=1;i<=n;i++){
//         line = ''
//         for(j=1; j<=n;j++){
//             line+='* '
//         }
//         console.log(line)
//     }
// }
// printSquare(5)






function printTriangle(n){

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
}
console.log('printTriangle')
printTriangle(5)



function printInvertedTriangle(n){
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
}
console.log('printInvertedTriangle')
printInvertedTriangle(5)



function printPyramid(n){
for (let i = 1; i <= n; i++) {
    let row = '';

    
    for (let j = 1; j <= n - i; j++) {
        row += '  ';
    }

    
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '* ';
    }

    console.log(row);
}
}

console.log('printPyramid')
printPyramid(5)



function printDiamond(n){

// upper pyramid
for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n - i; j++) {
        row += '  ';
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '* ';
    }

    console.log(row);
}

// lower inverted pyramid
for (let i = n - 1; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n - i; j++) {
        row += '  ';
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '* ';
    }

    console.log(row);
}

}

console.log('printDiamond')
printDiamond(5)



function printNumberPyramid(n){
for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += i;
    }

    console.log(row);
}
}

console.log('printNumberPyramid')
printNumberPyramid(4)


function printPascalTriangle(n){
for (let i = 0; i < n; i++) {
    let row = '';
    let num = 1;

    for (let j = 0; j <= i; j++) {
        row += num + ' ';
        num = num * (i - j) / (j + 1);
    }

    console.log(row);
}
}

console.log('printPascalTriangle')
printPascalTriangle(5)



function printHollowSquare(n){
for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
}

console.log('printHollowSquare')
printHollowSquare(5)
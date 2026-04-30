
//  Calculator Logic

function getValues() {
    let n1 = parseFloat(document.getElementById("num1").value) || 0;
    let n2 = parseFloat(document.getElementById("num2").value) || 0;
    return { n1, n2 };
}

function add() {
    let { n1, n2 } = getValues();
    document.getElementById("result").innerText = "Result: " + (n1 + n2);
}

function subtract() {
    let { n1, n2 } = getValues();
    document.getElementById("result").innerText = "Result: " + (n1 - n2);
}

function multiply() {
    let { n1, n2 } = getValues();
    document.getElementById("result").innerText = "Result: " + (n1 * n2);
}

function divide() {
    let { n1, n2 } = getValues();
    if (n2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by 0";
    } else {
        document.getElementById("result").innerText = "Result: " + (n1 / n2);
    }
}


// Assignment 1: Student Object

let student = {
    name: "Priyanka",
    age: 20,
    grade: "A"
};

student.subject = "Math";
student.grade = "A+";
delete student.age;

console.log("Assignment 1:", student);


// Assignment 2: Nested Object

let book = {
    title: "JS Basics",
    author: "John",
    details: {
        pages: 200,
        genre: "Education"
    }
};

console.log("Pages:", book.details.pages);
console.log("Genre:", book.details.genre);


// Assignment 3: Loop Through Object

let product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + ": " + product[key]);
}


//  Assignment 4: Calculator Object

let calcObj = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log("Object Add:", calcObj.add(10, 5));


//  Assignment 5: Compare Objects

let person1 = { name: "A", age: 20 };
let person2 = { name: "B", age: 25 };

console.log(
    person1.name === person2.name ? "Names same" : "Names different"
);

console.log(
    person1.age === person2.age ? "Age same" : "Age different"
);


//  Assignment 6: Mini Task Manager

let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    tasks.push(task);
    input.value = "";
    showTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = task + 
            ` <button onclick="deleteTask(${index})">Delete</button>`;
        list.appendChild(li);
    });
}
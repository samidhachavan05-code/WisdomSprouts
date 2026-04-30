// 1 ToDo List
let tasks=[];

function addTask(){
    let task=document.getElementById("taskInput").value;

    if(task!=""){
        tasks.push(task);
        displayTasks();
        document.getElementById("taskInput").value="";
    }
}

function displayTasks(){
    let list=document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        list.innerHTML += `
        <li>${task}
        <button onclick="deleteTask(${index})">Delete</button>
        </li>`;
    });
}

function deleteTask(index){
    tasks.splice(index,1);
    displayTasks();
}

function clearTasks(){
    tasks=[];
    displayTasks();
}



// 2 Student Marks
let marks=[];

function addMark(){
    let mark=Number(document.getElementById("markInput").value);

    if(mark){
        marks.push(mark);
        document.getElementById("markInput").value="";
    }
}

function calculateMarks(){
    let total=marks.reduce((a,b)=>a+b,0);
    let avg=(total/marks.length).toFixed(2);
    let max=Math.max(...marks);
    let min=Math.min(...marks);

    document.getElementById("marksResult").innerHTML=
    `Total Marks: ${total}<br>
     Average Marks: ${avg}<br>
     Highest Mark: ${max}<br>
     Lowest Mark: ${min}`;
}

function resetMarks(){
    marks=[];
    document.getElementById("marksResult").innerHTML="";
}



// 3 Search Array
let cars=["Audi","BMW","Tata","Honda","Kia"];

function searchItem(){
    let search=document.getElementById("searchInput").value.toLowerCase();

    let found=cars.find(item=>item.toLowerCase()==search);

    if(found){
        document.getElementById("searchResult").innerHTML=
        `<span class="highlight">${found}</span>`;
    }
    else{
        document.getElementById("searchResult").innerHTML="No matches found";
    }
}



// 4 Even Odd
let numbers=[];

function addNumber(){
    let num=Number(document.getElementById("numInput").value);
    numbers.push(num);
    document.getElementById("numInput").value="";
}

function showEven(){
    let even=numbers.filter(num=>num%2==0);
    document.getElementById("evenResult").innerHTML=even.join(", ");
}

function showOdd(){
    let odd=numbers.filter(num=>num%2!=0);
    document.getElementById("oddResult").innerHTML=odd.join(", ");
}

function clearNumbers(){
    numbers=[];
    document.getElementById("evenResult").innerHTML="";
    document.getElementById("oddResult").innerHTML="";
}



// 5 Sort Names
let names=[];

function addName(){
    let name=document.getElementById("nameInput").value;

    if(name!=""){
        names.push(name);
        displayNames();
        document.getElementById("nameInput").value="";
    }
}

function sortNames(){
    names.sort();
    displayNames();
}

function resetNames(){
    names=[];
    displayNames();
}

function displayNames(){
    let output="";

    names.forEach(name=>{
        output += `<div class="row">${name}</div>`;
    });

    document.getElementById("nameList").innerHTML=output;
}
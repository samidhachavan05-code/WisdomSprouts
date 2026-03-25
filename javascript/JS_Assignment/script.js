function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    // mark as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // important
        li.remove();
    });

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
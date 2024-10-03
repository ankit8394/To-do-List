let a = [];
let i = 0;

function save() {
    if (document.getElementById("inbox").value == "") {
        alert("Enter Your Task");
    } else {
        a[i] = document.getElementById("inbox").value;
        document.getElementById("show").innerHTML += 
            "<div class='task-item'>" +
                "<input type='checkbox' id='checkbox" + i + "' onclick='markDone(" + i + ")'>" +
                "<p id='task-text-" + i + "'>" + a[i] + "</p>" +  // Added ID for task text
                "<button onclick='req(this)' class='btn-delete'><i class='fa-solid fa-trash'></i></button>" +
            "</div>";
        i++;
        document.getElementById("inbox").value = "";
        console.log("Task count: " + i);
    }
}

function req(qw) {
    let parentDiv = qw.closest('div');
    parentDiv.remove(); // Remove the task
}

function markDone(index) {
    let taskText = document.getElementById("task-text-" + index);
    let checkbox = document.getElementById("checkbox" + index);
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through"; // Mark task as done
    } else {
        taskText.style.textDecoration = "none"; // Undo "Mark as Done"
    }
}
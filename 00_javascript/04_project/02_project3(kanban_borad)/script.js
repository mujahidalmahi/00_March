let tasksData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const columns = [todo, progress, done];

const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".bg");
const toggleModalButton = document.querySelector("#toggle-modal");
const modalBtn = document.querySelector("#add-new-task");

let dragElement = null;


// Create Task (reusable)
function createTask(title, desc) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <button>Delete</button>
    `;

    // drag
    div.addEventListener("drag", () => {
        dragElement = div;
    });

    // delete
    div.querySelector("button").addEventListener("click", () => {
        div.remove();
        updateCounts();
    });

    return div;
}


// Load from localStorage
function loadTasks() {
    const data = JSON.parse(localStorage.getItem("tasks")) || {};

    for (const col in data) {
        const column = document.querySelector(`#${col}`);

        data[col].forEach(task => {
            const taskEl = createTask(task.taskTitle, task.taskDesc);
            column.appendChild(taskEl);
        });
    }
}


// Update counts + save
function updateCounts() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".count");

        tasksData[col.id] = Array.from(tasks).map(t => ({
            taskTitle: t.querySelector("h3").innerText,
            taskDesc: t.querySelector("p").innerText
        }));

        if (count) count.innerText = tasks.length;
    });

    localStorage.setItem("tasks", JSON.stringify(tasksData));
}


// Drag & Drop
function addDragEvents(column) {
    column.addEventListener("dragover", (e) => e.preventDefault());

    column.addEventListener("dragenter", () => {
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", () => {
        column.classList.remove("hover-over");
    });

    column.addEventListener("drop", () => {
        if (!dragElement) return;
        
        column.appendChild(dragElement);
        column.classList.remove("hover-over");
        updateCounts();
    });
}


// Modal toggle
toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
    modal.classList.toggle("active");
})


// Add new task
modalBtn.addEventListener("click", () => {
    const title = modal.querySelector("input").value.trim();
    const desc = modal.querySelector("textarea").value.trim();

    if (!title) return; // basic validation

    const task = createTask(title, desc);
    todo.appendChild(task);

    updateCounts();

    // reset
    modal.querySelector("input").value = "";
    modal.querySelector("textarea").value = "";

    modal.classList.remove("active");
});


// Init
columns.forEach(addDragEvents);
loadTasks();
updateCounts();
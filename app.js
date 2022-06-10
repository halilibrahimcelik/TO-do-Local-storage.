//!Dom selectors
const taskInput = document.querySelector(".task-input");
const taskSubmit = document.querySelector(".task-button");
const taskList = document.querySelector(".task-list");
//!event listeners

taskSubmit.addEventListener("click", addTodo);
taskList.addEventListener("click", removeTodo);

//!Functions

function addTodo(e) {
  if (taskInput.value === "") {
    alert("please enter a task");
    e.preventDefault();
    return;
  }
  e.preventDefault();
  const divTodo = document.createElement("div");
  const newListTodo = document.createElement("li");
  const completedBtn = document.createElement("button");
  const deletedBtn = document.createElement("button");
  divTodo.classList.add("todoDiv");
  newListTodo.classList.add("todo-list");
  completedBtn.classList.add("complete-btn");
  deletedBtn.classList.add("delete-btn");
  newListTodo.innerText = taskInput.value;
  completedBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

  deletedBtn.innerHTML = `<i class="fa-solid fa-trash"></i> `;
  newListTodo.insertAdjacentElement("afterbegin", completedBtn);
  newListTodo.insertAdjacentElement("beforeend", deletedBtn);
  //   newListTodo.insertAdjacentHTML(deletedBtn);
  //   newListTodo.append(completedBtn, deletedBtn);
  divTodo.appendChild(newListTodo);
  taskList.appendChild(divTodo);
  taskInput.value = "";
}

//Removing  a todo
function removeTodo(e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
}

function checkCompleted(e) {}

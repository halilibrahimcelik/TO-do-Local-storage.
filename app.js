//!Dom selectors
const taskInput = document.querySelector(".task-input");
const taskSubmit = document.querySelector(".task-button");
const taskList = document.querySelector(".task-list");
//!event listeners

taskSubmit.addEventListener("click", addTodo);

//!Functions

function addTodo(e) {
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

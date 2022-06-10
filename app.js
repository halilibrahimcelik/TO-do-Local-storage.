//!Dom selectors
const taskInput = document.querySelector(".task-input");
const taskSubmit = document.querySelector(".task-button");
const taskList = document.querySelector(".task-list");
const filterTask = document.querySelector(".filter-tasks");
//!event listeners
document.addEventListener("DOMContentLoaded", getOurTasks);
taskSubmit.addEventListener("click", addTodo);
taskList.addEventListener("click", removeTodo);
taskList.addEventListener("click", checkCompleted);
filterTask.addEventListener("click", filterTaskLists);

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

  divTodo.appendChild(newListTodo);
  taskList.appendChild(divTodo);

  //!adding inputs to local storage
  saveOurTasks(taskInput.value);
  taskInput.value = "";
}

//Removing  a todo
function removeTodo(e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.classList.add("fall");
    setTimeout(() => {
      removeOurTasks(e.target.parentElement.parentElement.innerText);
      e.target.parentElement.parentElement.remove();
      console.log("yay");
    }, 1000);
  }
}

function checkCompleted(e) {
  if (e.target.classList.contains("fa-check")) {
    const todoList = e.target.parentElement.parentElement;
    todoList.classList.toggle("completed");
  }
}

function filterTaskLists(e) {
  const todos = taskList.childNodes;
  console.log(todos);

  console.log(e.target.value);
  //   todos.forEach((todo) => {
  //     console.log(todo.firstChild.classList.contains("completed"));

  //     if (e.target.value === "all") {
  //       return (todo.firstChild.style.display = "flex");
  //     }
  //     if (e.target.value === "completed") {
  //       console.log("ok");

  //       if (todo.firstChild.classList.contains("completed")) {
  //         console.log("ok2");
  //         todo.style.display = "flex";
  //       } else {
  //         console.log("ok3");
  //         todo.style.display = "none";
  //       }
  //       return;
  //     }
  //     if (e.target.value === "uncompleted") {
  //       if (!todo.firstChild.classList.contains("completed")) {
  //         todo.style.display = "flex";
  //       } else {
  //         todo.style.display = "none";
  //       }
  //     }
  //     return;
  //   });

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        console.log(todo.className);
        break;
      case "completed":
        console.log(todo.firstChild.classList.contains("completed"));
        if (todo.firstChild.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          console.log("nana");
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.firstChild.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveOurTasks(task) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getOurTasks(task) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const divTodo = document.createElement("div");
    const newListTodo = document.createElement("li");
    const completedBtn = document.createElement("button");
    const deletedBtn = document.createElement("button");
    divTodo.classList.add("todoDiv");
    newListTodo.classList.add("todo-list");
    completedBtn.classList.add("complete-btn");
    deletedBtn.classList.add("delete-btn");
    newListTodo.innerText = todo;
    completedBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

    deletedBtn.innerHTML = `<i class="fa-solid fa-trash"></i> `;
    newListTodo.insertAdjacentElement("afterbegin", completedBtn);
    newListTodo.insertAdjacentElement("beforeend", deletedBtn);

    divTodo.appendChild(newListTodo);
    taskList.appendChild(divTodo);
  });
}

function removeOurTasks(taskIndex) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = taskIndex;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));

  //IndexOf gives us the position of that innerText;
  //from there with splice - we delete 1 value in the localStorage.
  // //   console.log(tasks.children());
  //   console.log(todos.indexOf("mehmet")); //indexOf give me the position
}

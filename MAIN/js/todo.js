const todoCotainer = document.querySelector(".todo-container");
const todoInput = todoCotainer.querySelector("input");
const todoList = document.querySelector(".todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function doneTodo(event) {
  const li = event.target.parentNode;
  const list = li.querySelector("span").classList;
  if (list.contains("done")) {
    list.remove("done");
  } else {
    list.add("done");
  }
}

function removeTodo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((todoObject) => todoObject.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(todoObject) {
  const li = document.createElement("li");
  li.id = todoObject.id;
  const todo = document.createElement("span");
  todo.innerText = todoObject.todo;
  li.appendChild(todo);
  const doneButton = document.createElement("button");
  doneButton.innerText = "✅";
  doneButton.addEventListener("click", doneTodo);
  li.appendChild(doneButton);
  const removeButton = document.createElement("button");
  removeButton.innerText = "❌";
  removeButton.addEventListener("click", removeTodo);
  li.appendChild(removeButton);
  todoList.appendChild(li);
}

function handleForm(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObject = {
    todo: todo,
    id: new Date().getTime(),
  };
  toDos.push(todoObject);
  paintToDo(todoObject);
  saveToDos();
}

todoCotainer.addEventListener("submit", handleForm);

const todosValue = localStorage.getItem("todos");
if (todosValue !== null) {
  toDos = JSON.parse(todosValue);
  toDos.forEach(paintToDo);
}

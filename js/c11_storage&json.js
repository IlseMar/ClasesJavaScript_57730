let todos = JSON.parse(localStorage.getItem("todos")) || [];

let contador = 1;
let addTodoButton = document.getElementById("btn-add");
let todosList = document.getElementById("todo-list");

// console.log(addTodoButton);
// console.log(todosList);

const renderTarjetas = () => {
  todosList.innerHTML = "";
  todos.forEach((elemento) => {
    let item = document.createElement("li");
    item.className = "card";
    if (elemento.completed === true) {
      item.classList.add("completed");
    }
    item.innerHTML = `<span>${elemento.text}</span> 
    <button class="switch-button">
    ${elemento.completed === false ? "Completar" : "Re-activar"}
    </button>
    <button class="delete-button">Borrar</button>`;
    let switchButton = item.querySelector(".switch-button");
    let deleteButton = item.querySelector(".delete-button");
    switchButton.addEventListener("click", () => {
      toogleCompleted(elemento);
    });
    deleteButton.addEventListener("click", () => {
      deleteTodo(elemento);
    });
    todosList.appendChild(item);
  });
};
renderTarjetas();

const toogleCompleted = (elemento) => {
  let encontrado = todos.find((todo) => todo.id === elemento.id);
  encontrado.completed = !encontrado.completed;
  renderTarjetas();
  localStorage.setItem("todos", JSON.stringify(todos));
};

const deleteTodo = (elemento) => {
  todos = todos.filter((todo) => todo.id !== elemento.id);
  renderTarjetas();
  localStorage.setItem("todos", JSON.stringify(todos));
};

let addTodo = () => {
  let todoText = prompt("ingresa tu tarea");
  let todo = { id: contador, text: todoText, completed: false };
  todos.push(todo);
  contador++;
  //   console.log(todos);
  renderTarjetas();
  localStorage.setItem("todos", JSON.stringify(todos));
};
addTodoButton.addEventListener("click", addTodo);

//STORAGE & JSON
// localStorage.getItem() //metodo para obtener info
// localStorage.removeItem() //metodo para eliminar info
// localStorage.clear() //metodo para limpiar info
//  localStorage.setItem() //metodo para guardar info

// let botonDeLocalStorage = document.getElementById("local-btn");
// botonDeLocalStorage.addEventListener("click", () => {
//   localStorage.setItem(
//     "tareas",
//     JSON.stringify([
//       {
//         id: 1,
//         text: "estudiar JS",
//         completed: false,
//       },
//     ])
//   ); //metodo para guardar info
// });

// let btnGetLocal = document.getElementById("local-btn-get");
// btnGetLocal.addEventListener("click", () => {
//   let tareas = JSON.parse(localStorage.getItem("tareas"));
//   console.log(tareas);
// });

// let btnRemove = document.getElementById("local-btn-remove");
// btnRemove.addEventListener("click", () => {
//   localStorage.removeItem("frase");
// });

// let btnClear = document.getElementById("local-btn-clear");
// btnClear.addEventListener("click", () => {
//   localStorage.clear();
// });

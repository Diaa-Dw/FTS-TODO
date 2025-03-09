//Handler function for fetching data from API
import { changeTodoStatus } from "./js/changeTodoStatus.js";
import { displayTodos } from "./js/displayTodos.js";
import { fetchTodos } from "./js/fetchTodos.js";
import { handleAddTask } from "./js/handleAddTask.js";
import { removeTaskHandler } from "./js/handleRemoveTask.js";
import { searchTodosHandler } from "./js/searchTodos.js";
import { onTaskCountChange } from "./js/taskCountHandler.js";
import { updateTableFooter } from "./js/updateFooter.js";

//DOM
const todoFormElement = document.querySelector(".todo-list__form");
const tableBodyElement = document.querySelector(".todo-list__table-body");
const searchInputElement = document.querySelector(".todo-list__search");
// Global array for saving todos inside it
let todos = [];

//Function that call fetchTodos and then call displayTodos to show in the table
async function loadTodos() {
  try {
    todos = await fetchTodos();
    displayTodos(todos);
    updateTableFooter(todos);
  } catch (error) {
    alert(error.message);
  }
}

// Function to handle clicking on add task
async function onAddTask(e) {
  e.preventDefault();
  const createdTask = await handleAddTask();

  todos = [...todos, createdTask];

  onTaskCountChange("add");
}

// Function to handle remove task
function onRemoveTask(e) {
  removeTaskHandler(e, todos);
}
//Function to handle toggle task status
function onTaskStatusChange(e) {
  changeTodoStatus(e, todos);
}
//Function to handle changing of search input
const onSearchChange = (e) => {
  searchTodosHandler(e, todos);
};

//Event to update and display tasks when updating UI
document.addEventListener("DOMContentLoaded", loadTodos);
//Event to handle add task
todoFormElement.addEventListener("submit", onAddTask);
//Event to handle remove task
tableBodyElement.addEventListener("click", onRemoveTask);
//Event to handle update task status
tableBodyElement.addEventListener("click", onTaskStatusChange);
//Event to handle search input and filter todos
searchInputElement.addEventListener("input", onSearchChange);

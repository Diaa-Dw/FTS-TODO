//Handler function for fetching data from API
import { changeTodoStatus } from "./js/changeTodoStatus.js";
import { displayTodos } from "./js/displayTodos.js";
import { fetchTodos } from "./js/fetchTodos.js";
import { handleAddTask } from "./js/handleAddTask.js";
import { removeTaskHandler } from "./js/handleRemoveTask.js";
import {
  getTodosLocalStorage,
  setTodosToLocalStorage,
} from "./js/localStorageHelper.js";
import { searchTodosHandler } from "./js/searchTodos.js";
import { onTaskCountChange } from "./js/taskCountHandler.js";
import { todoInlineEditHanlder } from "./js/todoInlineEdit.js";
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
    const storedTodosInLocalStorage = getTodosLocalStorage();
    todos = [...storedTodosInLocalStorage];
    if (!todos.length) {
      todos = await fetchTodos();
    }
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

  if (createdTask) todos = [createdTask, ...todos];

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
//Save todos to localStorage before closing or refrush window
const handleBeforeUnload = () => {
  setTodosToLocalStorage(todos);
};

const taskEditHandler = (e) => {
  todoInlineEditHanlder(e, todos);
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
//Event to save todos into localStorage before browser refuresh or close
window.addEventListener("beforeunload", handleBeforeUnload);
//Event to handle inline edit of todo
tableBodyElement.addEventListener("click", taskEditHandler);

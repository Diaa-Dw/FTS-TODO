//Handler function for fetching data from API
import { displayTodos } from "./js/displayTodos.js";
import { fetchTodos } from "./js/fetchTodos.js";
import { handleAddTask } from "./js/handleAddTask.js";
import { incrementTaskCount } from "./js/incrementTaskCount.js";
import { updateTableFooter } from "./js/updateFooter.js";

//DOM
const todoFormElement = document.querySelector(".todo-list__form");

// Global array for saving todos inside it
let todos = [];

//Function that call fetchTodos and then call displayTodos to show in the table
async function loadTods() {
  try {
    todos = await fetchTodos();
    console.log("🚀 ~ loadTods ~ todos:", todos);
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
  console.log("🚀 ~ onAddTask ~ todos:", todos);

  todos = [...todos, createdTask];

  incrementTaskCount();
}

document.addEventListener("DOMContentLoaded", loadTods);

todoFormElement.addEventListener("submit", onAddTask);

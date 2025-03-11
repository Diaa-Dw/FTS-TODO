//Handler function for fetching data from API
import { displayTodos } from "./js/displayTodos.js";
import { fetchTodos } from "./js/fetchTodos.js";
import { updateTableFooter } from "./js/updateFooter.js";

// Global array for saving todos inside it
let todos = [];

//Function that call fetchTodos and then call displayTodos to show in the table
async function loadTods() {
  try {
    const todos = await fetchTodos();
    displayTodos(todos);
    updateTableFooter(todos);
  } catch (error) {
    alert(error.message);
  }
}

document.addEventListener("DOMContentLoaded", loadTods);

import { getTodoTemplate } from "../components/todoTemplate.js";

const tableBodyElement = document.querySelector(".todo-list__table-body");

export const displayTodos = (todos) => {
  try {
    const HTMLTemplate = todos.map((todo) => getTodoTemplate(todo)).join("");
    tableBodyElement.innerHTML = HTMLTemplate;
  } catch (error) {
    const errorMessage = `Display todos error: ${error.message}`;
    alert(errorMessage);
  }
};

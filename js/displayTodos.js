import { getTodoTemplate } from "./todoTemplate.js";

const tableBodyElement = document.querySelector(".todo-list__table-body");

export const displayTodos = (todos) => {
  const HTMLTemplate = todos.map((todo) => getTodoTemplate(todo)).join("");
  tableBodyElement.innerHTML = HTMLTemplate;
};

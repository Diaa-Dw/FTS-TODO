import { displayTodos } from "./displayTodos.js";

let searchDelayTimer;
export const searchTodosHandler = (e, todos) => {
  const searchTerm = e.target.value.toLowerCase();

  clearTimeout(searchDelayTimer);

  searchDelayTimer = setTimeout(() => {
    const filteredTasks = todos.filter((task) =>
      task.todo.toLowerCase().includes(searchTerm)
    );
    displayTodos(filteredTasks);
  }, 300);
};

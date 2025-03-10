import { sanitizeHTML } from "../utils/sanitizerHTML.js";

export const getTodoTemplate = (todo) => {
  if (!todo || typeof todo !== "object") {
    throw new Error("Invalid todo object.");
  }

  const status = todo.completed ? "completed" : "pending";
  return `
            <tr class="todo-list__table-row" data-id=${
              todo.id
            } data-status=${status}>
              <td class="todo-list__table-cell">${todo.id}</td>
              <td class="todo-list__table-cell" data-label="Task">
                ${sanitizeHTML(todo.todo)}
              </td>
              <td class="todo-list__table-cell" data-label="Status">
                <span class="todo-list__task-status">
                  ${status}
                </span>
              </td>
              <td class="todo-list__table-cell" data-label="Actions">
                <div class="todo-list__actions-container">
                  <button class="todo-list__button todo-list__button--status">
                  ${
                    status === "completed"
                      ? `<i class="fa-solid fa-hourglass-half"></i>`
                      : `<i class="fas fa-check"></i>`
                  } 
                  </button>
                  <button class="todo-list__button todo-list__button--delete">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
    `;
};

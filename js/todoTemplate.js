export const getTodoTemplate = (todo) => {
  const status = todo.completed ? "completed" : "pending";
  return `
            <tr class="todo-list__table-row todo-list__table-row--completed" data-id=${todo.id}>
              <td class="todo-list__table-cell">${todo.id}</td>
              <td class="todo-list__table-cell" data-label="Task">
                ${todo.todo}
              </td>
              <td class="todo-list__table-cell" data-label="Status">
                <span class="todo-list__task-status ${status}">
                  ${status}
                </span>
              </td>
              <td class="todo-list__table-cell" data-label="Actions">
                <div class="todo-list__actions-container">
                  <button class="todo-list__button todo-list__button--done">
                    <i class="fas fa-check"></i>
                  </button>
                  <button class="todo-list__button todo-list__button--delete">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
    `;
};

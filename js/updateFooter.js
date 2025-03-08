const tableFooterElement = document.querySelector(".todo-list__table-footer");

export const updateTableFooter = (todots) => {
  const tasksCount = todots.length;
  const completedTasksCount = todots.filter((todo) => todo.completed).length;
  const pendingTaskCount = tasksCount - completedTasksCount;

  const footerTemplate = `
                <tr class="todo-list__footer-row">
              <td colspan="3" class="todo-list__task-count">Total tasks: ${tasksCount}</td>
              <td class="todo-list__task-count">
                <span> Completed: ${completedTasksCount} </span>
                <span> Pending: ${pendingTaskCount} </span>
              </td>
            </tr>
    `;

  tableFooterElement.innerHTML = footerTemplate;
};

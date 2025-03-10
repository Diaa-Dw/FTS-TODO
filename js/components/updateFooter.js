const allTasksCountElement = document.querySelector(".task-count__number--all");
const completedTasksCountElement = document.querySelector(
  ".task-count__number--completed"
);
const pendingTasksCountElement = document.querySelector(
  ".task-count__number--pending"
);

export const updateTableFooter = (todos) => {
  const tasksCount = todos.length;
  const completedTasksCount = todos.filter((todo) => todo.completed).length;
  const pendingTaskCount = tasksCount - completedTasksCount;

  allTasksCountElement.textContent = tasksCount;
  completedTasksCountElement.textContent = completedTasksCount;
  pendingTasksCountElement.textContent = pendingTaskCount;
};

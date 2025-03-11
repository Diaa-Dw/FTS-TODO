const allTasksCountElement = document.querySelector(".task-count__number--all");
const completedTasksCountElement = document.querySelector(
  ".task-count__number--completed"
);
const pendingTasksCountElement = document.querySelector(
  ".task-count__number--pending"
);

export const updateTableFooter = (todots) => {
  const tasksCount = todots.length;
  const completedTasksCount = todots.filter((todo) => todo.completed).length;
  const pendingTaskCount = tasksCount - completedTasksCount;

  allTasksCountElement.textContent = tasksCount;
  completedTasksCountElement.textContent = completedTasksCount;
  pendingTasksCountElement.textContent = pendingTaskCount;
};

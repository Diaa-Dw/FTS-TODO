const allTasksCountElement = document.querySelector(".task-count__number--all");
const completedTasksCountElement = document.querySelector(
  ".task-count__number--completed"
);
const pendingTasksCountElement = document.querySelector(
  ".task-count__number--pending"
);

export const incrementTaskCount = () => {
  allTasksCountElement.textContent =
    Number(allTasksCountElement.textContent) + 1;

  pendingTasksCountElement.textContent =
    Number(pendingTasksCountElement.textContent) + 1;
};

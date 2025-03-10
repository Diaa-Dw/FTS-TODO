const allTasksCountElement = document.querySelector(".task-count__number--all");
const completedTasksCountElement = document.querySelector(
  ".task-count__number--completed"
);
const pendingTasksCountElement = document.querySelector(
  ".task-count__number--pending"
);

export const onTaskCountChange = (action, task = null) => {
  switch (action) {
    case "add": {
      allTasksCountElement.textContent =
        Number(allTasksCountElement.textContent) + 1;

      pendingTasksCountElement.textContent =
        Number(pendingTasksCountElement.textContent) + 1;

      break;
    }
    case "delete": {
      allTasksCountElement.textContent =
        Number(allTasksCountElement.textContent) - 1;

      if (task.completed) {
        completedTasksCountElement.textContent =
          Number(completedTasksCountElement.textContent) - 1;
      } else {
        pendingTasksCountElement.textContent =
          Number(pendingTasksCountElement.textContent) - 1;
      }

      break;
    }

    case "update": {
      const change = task.completed ? 1 : -1;

      completedTasksCountElement.textContent =
        Number(completedTasksCountElement.textContent) + change;

      pendingTasksCountElement.textContent =
        Number(pendingTasksCountElement.textContent) - change;

      break;
    }
  }
};

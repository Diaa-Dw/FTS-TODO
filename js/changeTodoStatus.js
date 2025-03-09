import { onTaskCountChange } from "./taskCountHandler.js";

const SERVER_TASK_ID_LIMIT = 254;

export const changeTodoStatus = async (e, todos) => {
  const { target } = e;
  const statusButtonElement = target.closest(".todo-list__button--status");

  if (!statusButtonElement) {
    return;
  }

  try {
    target.disable = true;
    let updatedTask = null;

    const rowElement = target.closest(".todo-list__table-row");
    const taskId = parseInt(rowElement.dataset.id);
    //Find index of task to remove and using splice to manipulate original todos array
    const taskIndex = todos.findIndex((todo) => todo.id === taskId);
    const updatedStatus = !todos[taskIndex].completed;
    todos[taskIndex].completed = updatedStatus;

    //IF the id of task is equal or less than  254 that means it is exsist on server and we can send a delete request to server
    if (taskId <= SERVER_TASK_ID_LIMIT) {
      await updateTaskStatusRequest(taskId, updatedStatus);
    }
    //Update count of completed & pending tasks in footer
    onTaskCountChange("update", todos[taskIndex]);

    handleUpdateUI(rowElement, statusButtonElement);
  } catch (error) {
    const errorMessage = `Update task status error: ${error.message}`;
    alert(errorMessage);
  } finally {
    target.disable = false;
  }
};

const updateTaskStatusRequest = async (taskId, updatedStatus) => {
  try {
    const res = await fetch(`https://dummyjson.com/todos/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: updatedStatus }),
    });
    if (!res.ok) {
      throw new Error(`Somthing went wrong while updating task id=${taskId}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    const errorMessage = `Update task status error: ${error.message}`;
    alert(errorMessage);
  }
};

const handleUpdateStatusIcon = (buttonElement, updatedStatus) => {
  let newButtonIcon = null;
  if (updatedStatus === "pending") {
    newButtonIcon = `<i class="fas fa-check"></i>`;
  } else {
    newButtonIcon = `<i class="fa-solid fa-hourglass-half"></i>`;
  }
  buttonElement.innerHTML = newButtonIcon;
};

const handleUpdateUI = (rowElement, buttonElement) => {
  const taskStatusElement = rowElement.querySelector(".todo-list__task-status");
  const currentStatus = rowElement.dataset.status;
  const updatedStatus = currentStatus === "completed" ? "pending" : "completed";
  taskStatusElement.textContent = updatedStatus;
  rowElement.dataset.status = updatedStatus;

  handleUpdateStatusIcon(buttonElement, updatedStatus);
};

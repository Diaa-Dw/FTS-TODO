import { onTaskCountChange } from "./taskCountHandler.js";

const SERVER_TASK_ID_LIMIT = 254;

export const removeTaskHandler = async (e, todos) => {
  const { target } = e;
  if (!target.closest(".todo-list__button--delete")) {
    return;
  }

  const isConfirmed = window.confirm(
    `Are you sure you want to delete this task?`
  );
  if (!isConfirmed) {
    return;
  }
  try {
    target.disable = true;
    let removedTask = null;

    const rowElement = target.closest(".todo-list__table-row");
    const taskId = parseInt(rowElement.dataset.id);
    rowElement.remove();

    //Find index of task to remove and using splice to manipulate original todos array
    const taskIndex = todos.findIndex((todo) => todo.id === taskId);

    //IF the id of task is equal or less than  254 that means it is exisist on server and we can send a delete request to server
    if (taskId <= SERVER_TASK_ID_LIMIT) {
      removedTask = await dleteTaskFromServer(taskId);
    } else {
      removedTask = todos[taskIndex];
    }

    todos.splice(taskIndex, 1);

    //Update footer UI
    onTaskCountChange("delete", removedTask);
  } catch (error) {
    const errorMessage = `Delete taske error: ${error.message}`;
    alert(errorMessage);
  } finally {
    target.disable = false;
  }
};

const dleteTaskFromServer = async (taskId) => {
  try {
    const res = await fetch(`https://dummyjson.com/todos/${taskId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Somthing went wrong while deleteing task id=${taskId}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    const errorMessage = `Delete taske error: ${error.message}`;
    alert(errorMessage);
  }
};

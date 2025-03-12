import { getTodoTemplate } from "../components/todoTemplate.js";

const taskInputElement = document.querySelector(".todo-list__input--add");
const tableBodyElement = document.querySelector(".todo-list__table-body");

export const handleAddTask = async () => {
  try {
    const taskToAdd = taskInputElement.value.trim();

    if (taskToAdd.length < 3) {
      return alert(
        "The task must contains at least 3 charcter please try again!"
      );
    }

    const taskObj = {
      todo: taskToAdd,
      completed: false,
      userId: 5,
    };

    const createdTask = await addTaskToServer(taskObj);

    if (!createdTask) {
      alert("Failed to create task. Please try again.");
      return;
    }

    createdTask.id = parseInt(`${new Date().getTime()}`.slice(-7));
    const todoTemplate = getTodoTemplate(createdTask);

    tableBodyElement.insertAdjacentHTML("afterbegin", todoTemplate);
    return createdTask;
  } catch (error) {
    const errorMessage = `Add task error: ${error.message}`;
    alert(errorMessage);
  } finally {
    cleanForm();
  }
};

const addTaskToServer = async (todo) => {
  try {
    const res = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error(
        "Somthing went wrong while creating the task please try again!"
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    const errorMessage = `Add task error: ${error.message}`;
    alert(errorMessage);
  }
};

const cleanForm = () => {
  taskInputElement.value = "";
};

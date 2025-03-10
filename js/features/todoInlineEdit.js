export const todoInlineEditHandler = (e, todos) => {
  const { target } = e;
  if (!target.classList.contains("todo-list__table-cell")) {
    return;
  }

  const taskContent = target.textContent.trim();
  target.textContent = "";
  const inputEl = document.createElement("input");
  inputEl.value = taskContent;
  inputEl.classList.add("todo-list__table-cell-input");
  target.append(inputEl);
  inputEl.focus();

  inputEl.addEventListener("blur", () => {
    handleTodoUpdate(inputEl, target, todos, taskContent);
  });

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleTodoUpdate(inputEl, target, todos, taskContent);
    }
  });
};

const updateTodoContent = (inputEl, taskEl) => {
  taskEl.textContent = inputEl.value;
  inputEl.remove();
};

const updateTodosHandler = (todos, taskEl) => {
  const rowEl = taskEl.closest(".todo-list__table-row");
  const taskId = parseInt(rowEl.dataset.id);

  const taskIndex = todos.findIndex((todo) => todo.id === taskId);
  todos[taskIndex].todo = taskEl.textContent;
};

const handleTodoUpdate = (inputEl, target, todos, prevTaskContent) => {
  if (!isValidInput(inputEl.value)) {
    alert("Please enter a task with at least 3 characters.");
    inputEl.value = prevTaskContent;
  }

  updateTodoContent(inputEl, target);
  updateTodosHandler(todos, target);
};

const isValidInput = (value) => {
  return value.length >= 3;
};

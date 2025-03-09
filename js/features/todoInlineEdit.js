export const todoInlineEditHanlder = (e, todos) => {
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

  inputEl.addEventListener("blur", () => {
    handleTodoUpdate(inputEl, target, todos);
  });

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleTodoUpdate(inputEl, target, todos);
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

const handleTodoUpdate = (inputEl, target, todos) => {
  updateTodoContent(inputEl, target);
  updateTodosHandler(todos, target);
};

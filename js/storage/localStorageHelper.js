export const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

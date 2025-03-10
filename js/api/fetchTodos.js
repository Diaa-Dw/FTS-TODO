export const fetchTodos = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos");
    if (res.status !== 200) {
      throw new Error("Somtihng went wrong while fetching todos.");
    }
    const data = await res.json();
    return data.todos;
  } catch (error) {
    let errorMessage = `Fetch Todos Error ${error.message}`;

    alert(errorMessage);
  }
};

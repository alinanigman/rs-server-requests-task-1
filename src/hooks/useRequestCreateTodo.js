export const useRequestCreateTodo = (refresh) => {
  const createTodo = (todoText) => {
    return fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todoText, completed: false }),
    })
      .then((res) => res.json())
      .then((createdTodo) => {
        console.log("Created todo:", createdTodo);
        return createdTodo;
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
        throw error;
      })
      .finally(() => {
        refresh();
      });
  };

  return { createTodo };
};

export const useRequestUpdateTodo = (refresh) => {
  const updateTodo = (todo) => {
    const { id, completed } = todo;
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        console.log("Updated todo:", updatedTodo);
        return updatedTodo;
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
        throw error;
      })
      .finally(() => refresh());
  };

  return { updateTodo };
};

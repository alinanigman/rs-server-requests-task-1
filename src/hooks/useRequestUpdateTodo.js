import { useRefresh } from "../contexts/RefreshContext.jsx";
export const useRequestUpdateTodo = () => {
  const { refresh } = useRefresh();
  const updateTodo = (todoId, completed, title) => {
    return fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed, title }),
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
      .finally(() => {
        refresh();
      });
  };

  return { updateTodo };
};

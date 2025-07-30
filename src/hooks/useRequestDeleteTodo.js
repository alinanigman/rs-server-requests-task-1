import { useRefresh } from "../contexts/RefreshContext.jsx";
export const useRequestDeleteTodo = () => {
  const { refresh } = useRefresh();
  const deleteTodo = (todoId) => {
    return fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("Deleted todo successfully");
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
        throw error;
      })
      .finally(() => {
        refresh();
      });
  };

  return { deleteTodo };
};

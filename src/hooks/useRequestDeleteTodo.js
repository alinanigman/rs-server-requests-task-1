import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDeleteTodo = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteTodo = (todoId) => {
    console.log("Deleting todo...", todoId);
    const todosRef = ref(db, `todos/${todoId}`);
    remove(todosRef)
      .then(() => {
        console.log("Todo deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return { isDeleting, deleteTodo };
};

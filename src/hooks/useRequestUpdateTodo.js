import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useRequestUpdateTodo = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateTodo = (todo) => {
    setIsUpdating(true);

    const { id, completed } = todo;
    const todosRef = ref(db, `todos/${id}`);
    set(todosRef, {
      ...todo,
      completed: !completed,
    })
      .then(() => {
        console.log("Todo updated successfully");
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
        throw error;
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return { isUpdating, updateTodo };
};

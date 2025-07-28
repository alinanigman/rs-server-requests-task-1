import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestCreateTodo = () => {
  const [isCreating, setIsCreating] = useState(false);
  const createTodo = (todoText) => {
    setIsCreating(true);
    const todosRef = ref(db, "todos");
    push(todosRef, { title: todoText, completed: false })
      .then((response) => {
        console.log("Created todo:", response);
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
        throw error;
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  return { isCreating, createTodo };
};

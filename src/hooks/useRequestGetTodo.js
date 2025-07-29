import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGetTodo = (todoId) => {
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const todosRef = ref(db, `todos/${todoId}`);
    return onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      setTodo(data);
      setIsLoading(false);
    });
  }, []);
  return {
    isLoading,
    todo,
  };
};

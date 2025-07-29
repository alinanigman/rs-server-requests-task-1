import { useState, useEffect } from "react";

export const useRequestGetTodo = (todoId, refreshFlag) => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/todos/${todoId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched list:", data);
        setTodo(data);
      })
      .catch((error) => {
        console.error("Error fetching list:", error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshFlag]);
  return {
    isLoading,
    todo,
  };
};

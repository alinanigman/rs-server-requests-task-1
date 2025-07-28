export const useRequestCreateTodo = () => {
  const createTodo = (todoText) => {
    return fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todoText, completed: false }),
    }).then((res) => res.json());
  };

  return { createTodo };
};

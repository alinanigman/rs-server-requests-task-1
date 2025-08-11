export const addTodo = (title) => (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  dispatch({ type: "SET_ERROR", payload: null });

  return fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ title, completed: false }),
  })
    .then((r) => r.json())
    .then((created) => dispatch({ type: "ADD_TODO", payload: created }))
    .catch((e) => dispatch({ type: "SET_ERROR", payload: e.message }))
    .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
};

export const updateTodo = (id, completed, title) => (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  dispatch({ type: "SET_ERROR", payload: null });

  return fetch(`http://localhost:3000/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ id, title, completed }),
  })
    .then((r) => r.json())
    .then((updated) => dispatch({ type: "UPDATE_TODO", payload: updated }))
    .catch((e) => dispatch({ type: "SET_ERROR", payload: e.message }))
    .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
};

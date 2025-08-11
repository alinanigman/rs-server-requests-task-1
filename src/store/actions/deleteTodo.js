export const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  dispatch({ type: "SET_ERROR", payload: null });

  return fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" })
    .then(() => dispatch({ type: "DELETE_TODO", payload: id }))
    .catch((e) => dispatch({ type: "SET_ERROR", payload: e.message }))
    .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
};

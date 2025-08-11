export const fetchTodos = () => (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  dispatch({ type: "SET_ERROR", payload: null });

  return fetch("http://localhost:3000/todos")
    .then((r) => r.json())
    .then((data) => dispatch({ type: "SET_TODOS", payload: data }))
    .catch((e) => dispatch({ type: "SET_ERROR", payload: e.message }))
    .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
};

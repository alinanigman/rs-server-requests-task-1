const initialState = [];

export const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TODOS":
      return payload;
    case "ADD_TODO":
      return [...state, payload];
    case "UPDATE_TODO":
      return state.map((todo) => (todo.id === payload.id ? payload : todo));
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

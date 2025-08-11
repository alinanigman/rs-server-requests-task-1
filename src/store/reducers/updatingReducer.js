export const updatingReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_UPDATING":
      return payload;
    default:
      return state;
  }
};

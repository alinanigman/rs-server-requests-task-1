export const deletingReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DELETING":
      return payload;
    default:
      return state;
  }
};

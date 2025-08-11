export const errorReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ERROR":
      return payload;
    default:
      return state;
  }
};

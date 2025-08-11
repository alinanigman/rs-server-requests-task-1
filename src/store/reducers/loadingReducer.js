export const loadingReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return payload;
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";

const reducer = combineReducers({
  todos: todosReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export default reducer;

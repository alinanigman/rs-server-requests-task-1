import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { loadingReducer } from "./loadingReducer";
import { updatingReducer } from "./updatingReducer";
import { deletingReducer } from "./deletingReducer";
import { errorReducer } from "./errorReducer";

const reducer = combineReducers({
  todos: todosReducer,
  isLoading: loadingReducer,
  isUpdating: updatingReducer,
  isDeleting: deletingReducer,
  error: errorReducer,
});

export default reducer;

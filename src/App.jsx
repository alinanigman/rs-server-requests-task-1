import styles from "./App.module.css";
import {
  useRequestGetList,
  useRequestCreateTodo,
  useRequestUpdateTodo,
  useRequestDeleteTodo,
} from "./hooks";
import { TodoForm, TodoList } from "./components";

function App() {
  const { list, isLoading } = useRequestGetList();
  const { isCreating, createTodo } = useRequestCreateTodo();
  const { isUpdating, updateTodo } = useRequestUpdateTodo();
  const { isDeleting, deleteTodo } = useRequestDeleteTodo();

  const handleAdd = (newTodo) => {
    createTodo(newTodo);
  };

  const handleToggle = (todo) => {
    updateTodo(todo);
  };

  const handleDelete = (todoId) => {
    deleteTodo(todoId);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <TodoForm isCreating={isCreating} onAdd={handleAdd} />
      <TodoList
        list={list}
        isLoading={isLoading}
        isUpdating={isUpdating}
        isDeleting={isDeleting}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

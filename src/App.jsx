import { useState } from "react";
import styles from "./App.module.css";
import {
  useRequestGetList,
  useRequestCreateTodo,
  useRequestUpdateTodo,
  useRequestDeleteTodo,
} from "./hooks";
import { TodoForm, TodoList } from "./components";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag(!refreshFlag);
  const { list, isLoading } = useRequestGetList(refreshFlag);
  const { createTodo } = useRequestCreateTodo(refresh);
  const { updateTodo } = useRequestUpdateTodo(refresh);
  const { deleteTodo } = useRequestDeleteTodo(refresh);

  const handleAdd = (newTodo) => {
    createTodo(newTodo);
  };

  const handleToggle = (todo) => {
    const { id, completed, title } = todo;
    updateTodo(id, !completed, title);
  };

  const handleDelete = (todoId) => {
    deleteTodo(todoId);
  };

  const handleApplyChanges = (value) => {
    const { id, completed, newValue } = value;
    updateTodo(id, completed, newValue);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        list={list}
        isLoading={isLoading}
        onApplyChanges={handleApplyChanges}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

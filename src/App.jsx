import { useState } from "react";
import styles from "./App.module.css";
import {
  useRequestGetList,
  useRequestCreateTodo,
  useRequestUpdateTodo,
} from "./hooks";
import { TodoForm, TodoList } from "./components";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag(!refreshFlag);
  const { list, isLoading } = useRequestGetList(refreshFlag);
  const { createTodo } = useRequestCreateTodo(refresh);
  const { updateTodo } = useRequestUpdateTodo(refresh);

  const handleAdd = (newTodo) => {
    createTodo(newTodo);
  };

  const handleToggle = (todo) => {
    const { id, completed } = todo;
    updateTodo(id, !completed);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList list={list} isLoading={isLoading} onToggle={handleToggle} />
    </div>
  );
}

export default App;

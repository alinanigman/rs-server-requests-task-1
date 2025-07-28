import { useState } from "react";
import styles from "./App.module.css";
import { useRequestGetList, useRequestCreateTodo } from "./hooks";
import { TodoForm, TodoList } from "./components";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag(!refreshFlag);
  const { list, isLoading } = useRequestGetList(refreshFlag);
  const { createTodo } = useRequestCreateTodo(refresh);

  const handleAdd = (newTodo) => {
    createTodo(newTodo);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList list={list} isLoading={isLoading} />
    </div>
  );
}

export default App;

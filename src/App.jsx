import styles from "./App.module.css";
import { useRequestGetList } from "./hooks";
import { TodoList } from "./components";
function App() {
  const { list, isLoading } = useRequestGetList();
  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <TodoList list={list} isLoading={isLoading} />
    </div>
  );
}

export default App;

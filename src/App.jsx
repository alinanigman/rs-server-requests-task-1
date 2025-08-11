import styles from "./App.module.css";

import { TodoForm, TodoList } from "./components";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

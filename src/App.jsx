import styles from "./App.module.css";
import { useRequestGetList } from "./hooks";
function App() {
  const { list, isLoading } = useRequestGetList();
  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo list</h1>
      <div className={styles.list}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          list.map((listItem) => (
            <div className={styles.listItem}>{listItem.title}</div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

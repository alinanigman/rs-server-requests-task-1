import { useState } from "react";
import styles from "./TodoList.module.css";

const TodoList = ({ list, isLoading, onToggle, onDelete }) => {
  const [isSorted, setIsSorted] = useState(false);
  const toggleSort = () => setIsSorted((prev) => !prev);
  const displayList = isSorted
    ? [...list].sort((a, b) => a.title.localeCompare(b.title))
    : list;
  return (
    <div className={styles.list}>
      <label className={styles.sortToggle}>
        <input type="checkbox" checked={isSorted} onChange={toggleSort} />
        Sort alphabetically
      </label>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        displayList.map((listItem) => (
          <div key={listItem.id} className={styles.listItem}>
            <div className={styles.listItemTitle}>
              <input
                type="checkbox"
                checked={listItem.completed}
                onChange={() => onToggle(listItem)}
              />
              <div className={styles.listItemCheckbox}>{listItem.title}</div>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => onDelete(listItem.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

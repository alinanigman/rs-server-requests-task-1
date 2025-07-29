import { useState, useEffect, useMemo } from "react";
import styles from "./TodoList.module.css";
import { TextField } from "../index";

const TodoList = ({
  list,
  isLoading,
  isUpdating,
  isDeleting,
  onToggle,
  onDelete,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const toggleSort = () => setIsSorted((prev) => !prev);

  const filteredList = useMemo(() => {
    const baseList = isSorted
      ? [...list].sort((a, b) => a.title.localeCompare(b.title))
      : list;

    if (!debouncedQuery.trim()) return baseList;

    return baseList.filter((item) =>
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );
  }, [list, isSorted, debouncedQuery]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms задержка

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  return (
    <div className={styles.list}>
      <label className={styles.sortToggle}>
        <input type="checkbox" checked={isSorted} onChange={toggleSort} />
        Sort alphabetically
      </label>
      <TextField
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search todos..."
      />
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        filteredList.map((listItem) => (
          <div key={listItem.id} className={styles.listItem}>
            <div className={styles.listItemTitle}>
              <input
                disabled={isUpdating}
                type="checkbox"
                checked={listItem.completed}
                onChange={() => onToggle(listItem)}
              />
              <div className={styles.listItemCheckbox}>{listItem.title}</div>
            </div>
            <button
              disabled={isDeleting}
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

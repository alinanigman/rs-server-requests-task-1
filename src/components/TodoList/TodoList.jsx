import { useState, useEffect, useMemo } from "react";
import { TextField, ListItem } from "../../components";
import styles from "./TodoList.module.css";

const DEBOUNCE_TIMEOUT = 300;

const TodoList = ({ list, isLoading, onToggle, onDelete, onApplyChanges }) => {
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
    }, DEBOUNCE_TIMEOUT);
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
        placeholder="Search todos..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        filteredList.map((listItem) => (
          <ListItem
            key={listItem.id}
            checked={listItem.completed}
            title={listItem.title}
            onApplyChanges={(val) => onApplyChanges({ ...listItem, ...val })}
            onToggle={() => onToggle(listItem)}
            onDelete={() => onDelete(listItem.id)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;

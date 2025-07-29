import { useState, useEffect, useMemo } from "react";
import styles from "./TodoList.module.css";
import { TextField, ListItem } from "../index";

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
          <ListItem
            key={listItem.id}
            title={listItem.title}
            completed={listItem.completed}
            isUpdating={isUpdating}
            isDeleting={isDeleting}
            onToggle={() => onToggle(listItem)}
            onDelete={() => onDelete(listItem.id)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;

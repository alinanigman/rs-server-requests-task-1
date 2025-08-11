import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, selectIsLoading } from "@/store/selectors";
import { fetchTodos, updateTodo, deleteTodo } from "@/store/actions";
import { TextField, ListItem } from "@/components";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const toggleSort = useCallback(() => setIsSorted((p) => !p), []);

  const debouncedQuery = useDebouncedValue(searchQuery);
  const filteredList = useMemo(() => {
    const base = isSorted
      ? [...list].sort((a, b) => a.title.localeCompare(b.title))
      : list;

    if (!debouncedQuery.trim()) return base;

    const q = debouncedQuery.toLowerCase();
    return base.filter((item) => item.title.toLowerCase().includes(q));
  }, [list, isSorted, debouncedQuery]);

  const handleToggle = useCallback(
    (todo) => {
      const { id, completed, title } = todo;
      dispatch(updateTodo(id, !completed, title));
    },
    [dispatch],
  );

  const handleApplyChanges = useCallback(
    (patch) => {
      const { id, title, completed } = patch; // patch приходит из ListItem
      dispatch(updateTodo(id, completed, title));
    },
    [dispatch],
  );

  const handleDelete = useCallback(
    (id) => dispatch(deleteTodo(id)),
    [dispatch],
  );

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
        filteredList.map((item) => (
          <ListItem
            key={item.id}
            checked={item.completed}
            title={item.title}
            onApplyChanges={(val) =>
              handleApplyChanges({
                id: item.id,
                completed: item.completed,
                ...val,
              })
            }
            onToggle={() => handleToggle(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;

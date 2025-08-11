import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "@/store/actions";
import { selectIsUpdating, selectIsDeleting } from "@/store/selectors";
import styles from "./ListItem.module.css";
import { TextField, Button } from "@/components";

const ListItem = ({ id, checked, title }) => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(selectIsUpdating);
  const isDeleting = useSelector(selectIsDeleting);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);

  useEffect(() => {
    if (!isEditing) setValue(title);
  }, [title, isEditing]);

  const handleApply = () => {
    setIsEditing(false);
    dispatch(updateTodo(id, checked, value));
  };

  const handleToggle = () => {
    dispatch(updateTodo(id, !checked, value));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.ListItem}>
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={checked}
          disabled={isUpdating || isDeleting}
          onChange={handleToggle}
        />
        {isEditing ? (
          <div className={styles.editBlock}>
            <TextField
              value={value}
              placeholder={title}
              onChange={({ target }) => setValue(target.value)}
            />
            <Button
              color="success"
              onClick={handleApply}
              disabled={isUpdating || isDeleting}
            >
              &#10004;
            </Button>
          </div>
        ) : (
          <div className={checked ? styles.checked : ""}>{title}</div>
        )}
      </div>
      <div className={styles.actions}>
        <Button
          color="primary"
          disabled={isUpdating || isDeleting}
          onClick={() => setIsEditing(!isEditing)}
        >
          &#9999;
        </Button>
        <Button color="error" disabled={isDeleting} onClick={handleDelete}>
          &#215;
        </Button>
      </div>
    </div>
  );
};

export default ListItem;

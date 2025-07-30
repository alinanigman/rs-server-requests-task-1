import { useState } from "react";
import styles from "./ListItem.module.css";
import { TextField, Button } from "../../components";

const ListItem = ({ checked, title, onToggle, onApplyChanges, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);

  const handleOnApply = () => {
    setIsEditing(false);
    if (onApplyChanges) onApplyChanges({ newValue: value, checked });
  };

  return (
    <div className={styles.ListItem}>
      <div className={styles.main}>
        <input type="checkbox" checked={checked} onChange={onToggle} />
        {isEditing ? (
          <div className={styles.editBlock}>
            <TextField
              value={value}
              placeholder={title}
              onChange={({ target }) => setValue(target.value)}
            />
            <Button color="success" onClick={handleOnApply}>
              &#10004;
            </Button>
          </div>
        ) : (
          <div className={checked ? styles.checked : ""}>{title}</div>
        )}
      </div>
      <div className={styles.actions}>
        <Button color="primary" onClick={() => setIsEditing(!isEditing)}>
          &#9999;
        </Button>
        <Button color="error" onClick={onDelete}>
          &#215;
        </Button>
      </div>
    </div>
  );
};

export default ListItem;

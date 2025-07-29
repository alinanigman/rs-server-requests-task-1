import styles from "./ListItem.module.css";

const ListItem = ({
  title,
  completed,
  isUpdating,
  isDeleting,
  onClick,
  onToggle,
  onDelete,
  isSimple = true,
}) => {
  const handleOnToggle = () => {
    onToggle();
  };

  const handleOnDelete = () => {
    onDelete();
  };

  const handleOnClick = () => {
    onClick();
  };

  if (isSimple) {
    return (
      <div className={styles.simpleItem} onClick={handleOnClick}>
        <input readOnly type="checkbox" checked={completed} />
        <div
          className={`${styles.simpleItemTitle} ${
            completed ? styles.completed : ""
          }`}
        >
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.listItem}>
      <div className={styles.listItemHeader}>
        <label>
          <input
            name="todo"
            disabled={isUpdating}
            type="checkbox"
            checked={completed}
            onChange={handleOnToggle}
          />
          Completed
        </label>

        <button
          disabled={isDeleting}
          className={styles.deleteButton}
          onClick={handleOnDelete}
        >
          Delete
        </button>
      </div>
      <div className={styles.listItemTitle}>{title}</div>
    </div>
  );
};

export default ListItem;

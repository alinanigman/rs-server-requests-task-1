import styles from "./ListItem.module.css";

const ListItem = ({
  title,
  completed,
  isUpdating,
  isDeleting,
  onToggle,
  onDelete,
}) => {
  const handleOnToggle = () => {
    console.log("handleOnToggle");
    onToggle();
  };

  const handleOnDelete = () => {
    console.log("handleOnDelete");
    onDelete();
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.listItemTitle}>
        <input
          disabled={isUpdating}
          type="checkbox"
          checked={completed}
          onChange={handleOnToggle}
        />
        <div className={styles.listItemCheckbox}>{title}</div>
      </div>
      <button
        disabled={isDeleting}
        className={styles.deleteButton}
        onClick={handleOnDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;

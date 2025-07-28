import styles from "./TodoList.module.css";

const TodoList = ({ list, isLoading, onToggle }) => {
  return (
    <div className={styles.list}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        list.map((listItem) => (
          <div key={listItem.id} className={styles.listItem}>
            <div className={styles.listItemTitle}>
              <input
                type="checkbox"
                checked={listItem.completed}
                onChange={() => onToggle(listItem)}
              />
              <div className={styles.listItemCheckbox}>{listItem.title}</div>
            </div>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

import styles from "./TodoList.module.css";

const TodoList = ({ list, isLoading }) => {
  return (
    <div className={styles.list}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        list.map((listItem) => (
          <div key={listItem.id} className={styles.listItem}>
            {listItem.title}
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

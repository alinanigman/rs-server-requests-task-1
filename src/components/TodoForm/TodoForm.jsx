import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ isCreating, onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        placeholder="Add new todo..."
      />
      <button className={styles.button} type="submit" disabled={isCreating}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;

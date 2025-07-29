import { useState } from "react";
import styles from "./TodoForm.module.css";
import { TextField } from "../index";

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
      <TextField
        value={title}
        onChange={setTitle}
        placeholder="Add new todo..."
      />
      <button className={styles.button} type="submit" disabled={isCreating}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;

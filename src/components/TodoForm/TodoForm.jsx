import { useState } from "react";
import { TextField, Button } from "../../components";
import styles from "./TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
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
        placeholder="Add new todo..."
        onChange={({ target }) => setTitle(target.value)}
      />
      <Button color="primary">Add</Button>
    </form>
  );
};

export default TodoForm;

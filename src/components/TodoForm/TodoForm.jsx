import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/store/actions";
import { selectIsLoading } from "@/store/selectors";
import { TextField, Button } from "@/components";
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading); // временно используем общий лоадер
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    dispatch(addTodo(t)).then(() => setTitle("")); // очистим поле после успешного POST
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        placeholder="Add new todo..."
      />
      <Button color="primary">Add</Button>
    </form>
  );
};

export default TodoForm;
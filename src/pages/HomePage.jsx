import styles from "../App.module.css";
import { useRequestGetList, useRequestCreateTodo } from "../hooks";
import { useNavigate } from "react-router-dom";
import { PageHeader, TodoForm, TodoList } from "../components";

function HomePage() {
  const navigate = useNavigate();
  const { list, isLoading } = useRequestGetList();
  const { isCreating, createTodo } = useRequestCreateTodo();

  const handleAdd = (newTodo) => {
    createTodo(newTodo);
  };

  const handleClick = (todoId) => {
    navigate(`/task/${todoId}`);
  };

  return (
    <div className={styles.App}>
      <PageHeader title={"Todo list"} />
      <TodoForm isCreating={isCreating} onAdd={handleAdd} />
      <TodoList list={list} isLoading={isLoading} onClick={handleClick} />
    </div>
  );
}

export default HomePage;

import { useParams, useNavigate } from "react-router-dom";
import {
  useRequestGetTodo,
  useRequestUpdateTodo,
  useRequestDeleteTodo,
} from "../hooks";
import { PageHeader, ListItem } from "../components";
import styles from "../App.module.css";

function TaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, todo } = useRequestGetTodo(id);
  const { isUpdating, updateTodo } = useRequestUpdateTodo();
  const { isDeleting, deleteTodo } = useRequestDeleteTodo();

  const handleToggle = () => {
    console.log("handleToggle todo: ", todo);
    updateTodo(todo);
  };

  const handleDelete = (todoId) => {
    deleteTodo(todoId);
  };

  const handleGoBackBtnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.App}>
      <PageHeader title={"Task"} onClick={handleGoBackBtnClick} showGoBackBtn />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <ListItem
          title={todo.title}
          completed={todo.completed}
          isSimple={false}
          isUpdating={isUpdating}
          isDeleting={isDeleting}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default TaskPage;

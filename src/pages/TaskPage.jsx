import { useParams, useNavigate } from "react-router-dom";
import {
  useRequestGetTodo,
  useRequestUpdateTodo,
  useRequestDeleteTodo,
} from "../hooks";
import { PageHeader, ListItem } from "../components";
import styles from "../App.module.css";
import { useState } from "react";

function TaskPage() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag(!refreshFlag);
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, todo } = useRequestGetTodo(id, refreshFlag);
  const { isUpdating, updateTodo } = useRequestUpdateTodo(refresh);
  const { isDeleting, deleteTodo } = useRequestDeleteTodo();

  const handleToggle = () => {
    updateTodo({ ...todo, id });
  };

  const handleDelete = () => {
    deleteTodo(id);
    navigate(-1);
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
          title={todo?.title ?? ""}
          completed={todo?.completed ?? false}
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

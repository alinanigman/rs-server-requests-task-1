import styles from "./PageHeader.module.css";

const PageHeader = ({ title, onClick, showGoBackBtn = false }) => {
  const handleOnClick = () => {
    onClick();
  };
  return (
    <div className={styles.header}>
      {showGoBackBtn && (
        <button className={styles.btn} onClick={handleOnClick}>
          &#8592; Назад
        </button>
      )}
      <h1 className={styles.headerTitle}>{title}</h1>
    </div>
  );
};

export default PageHeader;

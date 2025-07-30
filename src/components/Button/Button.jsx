import styles from "./Button.module.css";

const Button = ({ color = "primary", onClick, children }) => {
  const btnClassName = `${styles.Button} ${styles[color]}`;
  return (
    <button className={btnClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

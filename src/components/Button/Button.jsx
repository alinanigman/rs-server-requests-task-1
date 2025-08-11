import styles from "./Button.module.css";

const Button = ({ color = "primary", onClick, children, small, disabled }) => {
  let btnClassName = `${styles.Button} ${styles[color]}`;
  if (small) btnClassName += ` ${styles.small}`;
  return (
    <button className={btnClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

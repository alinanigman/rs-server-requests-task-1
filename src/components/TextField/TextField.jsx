import styles from "./TextField.module.css";

const TextField = ({ value, placeholder = "", onChange }) => {
  return (
    <input
      className={styles.TextField}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextField;

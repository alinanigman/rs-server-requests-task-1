import styles from "./TextField.module.css";

const TextField = ({ value, onChange, placeholder = "" }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
};

export default TextField;

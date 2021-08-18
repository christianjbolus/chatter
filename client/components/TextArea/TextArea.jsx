import styles from './TextArea.module.css';

export default function TextArea({
  className,
  label,
  name,
  value,
  rows,
  col,
  maxLength,
  placeholder,
  handleChange,
}) {
  return (
    <div className={styles.form_field}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        className={styles[className]}
        id={name}
        name={name}
        value={value}
        rows={rows}
        col={col}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

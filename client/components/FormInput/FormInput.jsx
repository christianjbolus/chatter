import React from 'react';
import styles from './FormInput.module.css';

const FormInput = React.forwardRef((props, ref) => {
  const {type, label, name, value, handleChange, errMessage} = props
  console.log(errMessage)
  return (
    <div className={styles.form_field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        name={name}
        value={value}
        ref={ref}
        onChange={handleChange}
      />
      <p className={styles.error}>{errMessage}</p>
    </div>
  );
})

FormInput.displayName = 'FormInput'

FormInput.defaultProps = {
  type: 'text',
  errMessage: ''
};

export default FormInput

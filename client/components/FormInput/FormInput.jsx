import React from 'react';
import { IoWarning } from '@react-icons/all-files/io5/IoWarning'
import styles from './FormInput.module.scss';

const FormInput = React.forwardRef((props, ref) => {
  
  const { type, label, name, value, placeholder, handleChange, validation, errMessage } = props;

  return (
    <div className={styles.container}>
      <div className={styles.form_field}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          className={errMessage ? `${styles.input} ${styles.err_input}` : styles.input}
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          ref={ref}
          onChange={handleChange}
          onBlur={validation}
        />
        {errMessage && (
          <p className={styles.error}>
            <IoWarning className="error_icon" />
            {errMessage}
          </p>
        )}
      </div>
    </div>
  );
});

FormInput.displayName = 'FormInput'

FormInput.defaultProps = {
  type: 'text',
  errMessage: ''
};

export default FormInput

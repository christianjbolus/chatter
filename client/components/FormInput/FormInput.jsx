import React from 'react';
import styles from './FormInput.module.css';

const FormInput = React.forwardRef((props, ref) => {
  const {type, label, name, value, handleChange, errMessage} = props
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

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput
// import styles from './FormInput.module.css';

// export default function FormInput({
//   type,
//   label,
//   name,
//   value,
//   ref,
//   handleChange,
//   errMessage,
// }) {
//   return (
//     <div className={styles.form_field}>
//       <label className={styles.label} htmlFor={name}>
//         {label}
//       </label>
//       <input
//         className={styles.input}
//         id={name}
//         type={type}
//         name={name}
//         value={value}
//         onChange={handleChange}
//       />
//       <p className={styles.error}>{errMessage}</p>
//     </div>
//   );
// }

// FormInput.defaultProps = {
//   type: 'text',
// };

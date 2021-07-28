import React from 'react';

export default function FormInput({ type, label, name, value, handleChange, errMessage }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <p className="input-error-message">{errMessage}</p>
    </div>
  );
}

FormInput.defaultProps = {
  type: "text"
}

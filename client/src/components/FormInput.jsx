import React from 'react';

export default function FormInput({ type, label, name, value, handleChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

FormInput.defaultProps = {
  type: "text"
}

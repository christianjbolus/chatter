import React from 'react';

export default function TextArea({
  label,
  name,
  value,
  rows,
  col,
  placeholder,
  handleChange,
}) {
  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        col={col}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

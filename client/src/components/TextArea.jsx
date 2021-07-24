import React from 'react';

export default function TextArea({
  label,
  name,
  value,
  rows,
  col,
  handleChange,
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        col={col}
        onChange={handleChange}
      />
    </div>
  );
}

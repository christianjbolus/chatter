import React from 'react';

export default function TextArea({
  label,
  name,
  value,
  row,
  col,
  handleChange,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        row={row}
        col={col}
        onChange={handleChange}
      />
    </div>
  );
}

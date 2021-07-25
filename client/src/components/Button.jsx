import React from 'react';
import '../assets/css/components/Button.css';

export default function Button({ className, text, children, onClick, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
};

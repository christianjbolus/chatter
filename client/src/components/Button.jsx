import React from 'react';
import '../assets/css/components/Button.css';

export default function Button({ className, text, children, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
};

import React from 'react';

function CustomButton({ text, onClick, to, className, type = "button", children }) {
  if (to) {
    return (
      <a href={to} className={className}>
        {children && <span className="btn-icon">{children}</span>}
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children && <span className="btn-icon">{children}</span>}
      <span>{text}</span>
    </button>
  );
}

export default CustomButton;

import React from 'react';
import { Link } from 'react-router-dom';

function CustomButton({ text, onClick, to, className, type = "button", children }) {
  const content = (
    <>
      {children && <span className="btn-icon">{children}</span>}
      <span>{text}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  );
}

export default CustomButton;

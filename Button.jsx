import React from 'react';

function Button({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
}

export default Button;

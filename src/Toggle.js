import React from 'react';
import './Toggle.css';

const Toggle = ({ onClick }) => {
  return (
    <div className="toggle-switch" onClick={onClick}>
      <div className="slider round"></div>
    </div>
  );
}

export default Toggle;

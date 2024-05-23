import React from 'react';
import './Member.css';


const Member = ({ name, position, picture, mode }) => {
  return (
    <div className={`member-card ${mode === 'dark' ? 'dark' : ''}`}>
      <div className="member-img">
        <img src={`${picture}`} alt={name} />
      </div>
      <div className="member-info">
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Member;

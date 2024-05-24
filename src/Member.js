import React from 'react';
import './Member.css';

function Member({ member }) {
  return (
    <div className="member-panel">
      <img src={member.picture} alt={`${member.name}`} className="member-image" />
      <h3>{member.name}</h3>
      <p>{member.position}</p>
      <p className="description">(description)</p> 
    </div>
  );
}

export default Member;
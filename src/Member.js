import React from 'react';

function Member({ member }) {
  return (
    <div className="member-card">
      <h2>{member.name}</h2>
      <p>{member.position}</p>
      <img src={member.picture} alt={`${member.name}`} className="member-image" />
    </div>
  );
}

export default Member;
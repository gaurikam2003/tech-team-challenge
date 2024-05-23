import React from 'react';
import './Members.css';
import members from './members_details.json';

const Members = () => {
  return (
    <div className="members-container">
      {members.map((member) => (
        <div key={member.name} className="member-card">
          <img src={member.picture} alt={member.name} className="member-picture" />
          <h3 className="member-name">{member.name}</h3>
          <p className="member-position">{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;

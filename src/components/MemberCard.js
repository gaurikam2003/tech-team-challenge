import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <img src={`${process.env.PUBLIC_URL}/${member.picture}`} alt={`${member.name}`} className="member-photo" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
        </div>
    );
};

export default MemberCard;

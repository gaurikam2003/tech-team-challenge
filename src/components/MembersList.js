import React, { useEffect, useState } from 'react';
import MemberCard from './MemberCard';
import './MembersList.css';
import membersData from '../members_details.json';

const MembersList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        setMembers(membersData);
    }, []);

    return (
        <div className="members-list">
            {members.map((member, index) => (
                <MemberCard key={index} member={member} />
            ))}
        </div>
    );
};

export default MembersList;

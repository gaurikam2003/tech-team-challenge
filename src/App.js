import React, { useState } from 'react';
import './App.css';
import data from './members_details.json'

function App() {
  const [expandedMember, setExpandedMember] = useState(null);

  const handleClick = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <div className="App">
      <ul>
        {data.map((member, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <h1>{member.name}</h1>
            <h2>{member.position}</h2>
            <img src={member.picture} alt={member.name} />
            {expandedMember === index && (
              <div className="additional-info">
                <p>Additional information about {member.name}.</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

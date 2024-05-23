import React from 'react';
import './App.css';
import data from './members_details.json';

function App() {
  return (
    <div className="Team">
      <h1>F!rosh Orientation Committee</h1>
      <div className="team-list">
        {data.map((teamMember) => (
          <div key={teamMember.name} className="team-card">
            <img src={teamMember.picture} alt={teamMember.name} className="team-photo" />
            <h3 className="team-name">{teamMember.name}</h3>
            <p className="team-role">{teamMember.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

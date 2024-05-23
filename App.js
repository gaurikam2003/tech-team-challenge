import React from 'react';
import './App.css';
import data from './members_details.json';

function MemberCard({ name, position, picture }) {
  return (
    <div className="member-card">
      <img src={picture} alt={`${name}'s picture`} className="member-photo" />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>F!rosh Orientation Committee</h1>
      <p className="description">
        Welcome to the F!rosh Orientation Committee page. Here you will find information about the team members who make F!rosh week a memorable experience for all new students!
      </p>
      <div className="members-grid">
        {data.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            position={member.position}
            picture={member.picture}
          />
        ))}
      </div>
      <p className="description">
        Note: Responsive such that when you zoom it auto-fits. It was a nice experience learning how to use GitHub and make pull requests, thanks for that :)
      </p>
    </div>
  );
}

export default App;

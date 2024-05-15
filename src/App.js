import React from 'react';
import Profile from './Profile';
import './App.css';
import data from './members_details.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Members</h1>
        <div className="Members">
          {data.map((member) => (
            <Profile name={member.name} position={member.position} picture={member.picture} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

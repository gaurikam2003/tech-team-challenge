import React from 'react';
import './App.css';
import data from './members_details.json'

function App() {
  return (
    <div className="App">
      <ul>
        {data.map((member, index) => (
          <li key={index}>
            <h1>{member.name}</h1>
            <h2>{member.position}</h2>
            <img src={member.picture} alt={member.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

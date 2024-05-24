import React from 'react';
import './App.css';
import data from './members_details.json'
import Card from './Card'

function App() {
  return (
    <div className="App">
      <h1>Welcome to FROSH!!!!</h1>
      <h2 className="h2">Meet the team</h2>
      {data.map((member, index) => (
        <Card
          key={index}
          name={member.name}
          position={member.position}
          picture={member.picture}
        />
      ))}
    </div>
  );
}

export default App;

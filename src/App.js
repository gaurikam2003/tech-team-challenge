import React from 'react';
import './App.css';
import data from './members_details.json'
import Header from './Header';
import Member from './Member';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="members-list">
        {data.map((member) => (<Member key={member.name} member={member} />))}
      </div>
    </div>
    
  );
}

export default App;

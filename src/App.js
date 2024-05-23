import React, { useState, useEffect } from 'react';
import './App.css';
import data from './members_details.json'
import Member from './Member.js'
import Toggle from './Toggle.js';


function App() {
  const [members, setMembers] = useState([]);
  const [mode, setMode] = useState('light');

  useEffect(() => {
    setMembers(data);
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    const toggleSwitch = document.querySelector('.toggle-switch');
    toggleSwitch.classList.remove('light', 'dark');
    toggleSwitch.classList.add(newMode);
  };

  return (
    <div className={`app ${mode}`}>
      <Toggle onClick={toggleMode} />
      <h1>F!rosh Orientation Committee</h1>
      <div className="members">
        {members.map((member, index) => (
          <Member key={index} {...member} mode={mode} />
        ))}
      </div>
    </div>
  );
}

export default App;

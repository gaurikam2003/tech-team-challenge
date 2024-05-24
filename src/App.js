import React, { useState } from 'react';
import './App.css';
import members from './members_details.json';

function App() {

  /* display in 2-3-2 formation (presented in similarity of role) */
  const [startIndex, setStartIndex] = useState(0);
  const memberstoDisplay = members.slice(startIndex, startIndex + 2);
  const memberstoDisplay2 = members.slice(startIndex + 2, startIndex + 5);
  const memberstoDisplay3 = members.slice(startIndex + 5, startIndex + 8);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Meet the F!rosh Orientation Committee!</h1>
      </header>
      <div className='mainpage'>
          <div className="members-container">

            <div className="member-boxes">
              {memberstoDisplay.map((member, index) => (
                <div key={index} className="member-box">
                  <img src={member.picture} alt={member.name} className="member-photo" />
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>

            <div className="member-boxes">
              {memberstoDisplay2.map((member, index) => (
                <div key={index} className="member-box">
                  <img src={member.picture} alt={member.name} className="member-photo" />
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>

            <div className="member-boxes">
              {memberstoDisplay3.map((member, index) => (
                <div key={index} className="member-box">
                  <img src={member.picture} alt={member.name} className="member-photo" />
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;
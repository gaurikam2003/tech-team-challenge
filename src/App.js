import React, { useState } from 'react';
import './App.css';
import members from './members_details.json';

function App() {

  //to iterate through member cards (show 4 at a time)
  const [startIndex, setStartIndex] = useState(0);
  const membersToShow = members.slice(startIndex, startIndex + 4);

  //to execute when the next button is clicked
  const handleNextClick = () => {
    if (startIndex === 3) {
      setStartIndex(prevIndex => Math.max(0, prevIndex - 3));
    } else {
      setStartIndex(prevIndex => Math.max(0, prevIndex + 3));
    }
  };

  //to execute when the previous button is clicked
  const handlePrevClick = () => {
    if (startIndex === 0) {
      setStartIndex(prevIndex => Math.max(0, prevIndex + 3));
    } else {
      setStartIndex(prevIndex => Math.max(0, prevIndex - 3));
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>F!rosh Orientation Committee</h1>
      </header>
      <div className='mainpage'>
        <div className="arrows">
          <button className="arrow-btn left-arrow" onClick={handlePrevClick}>
            &lt;
          </button>
          <div className="members-container">
            <div className="member-cards">
              {membersToShow.map((member, index) => (
                <div key={index} className="member-card">
                  <img src={member.picture} alt={member.name} className="member-photo" />
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="arrow-btn right-arrow" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
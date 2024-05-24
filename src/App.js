import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import members from './members_details.json';
import Header from './components/Header/Header';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import CardContainer from './components/CardContainer/CardContainer';

const colors = [
  '#bf76db', '#7b1aa1', '#ccac2b', '#e0c867', '#deaeeb', '#ded014','#7b1aa1' 
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState('#bf76db');

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <Header/>
      <ButtonContainer
        showPrevCard={() => {
          if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1);
            setBgColor(getRandomColor());
          }
        }}
        showNextCard={() => {
          if(currentIndex < members.length - 1){
            setCurrentIndex(currentIndex + 1);
            setBgColor(getRandomColor());
          }
        }}
        currentIndex={currentIndex}
        totalMembers={members.length}
      />
      <CardContainer
        members={members}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setBgColor={setBgColor}
        getRandomColor={getRandomColor}
      />
    </div>
  );
}



export default App;

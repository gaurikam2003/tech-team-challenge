import React from 'react'
import './ButtonContainer.css'

const ButtonContainer = ({showPrevCard, showNextCard, currentIndex, totalMembers}) => {

  return (
    <div className="button-container">
        <button onClick={showPrevCard} disabled={currentIndex === 0}>Previous</button>
        <button onClick={showNextCard} disabled={currentIndex === totalMembers - 1}>Next</button>
    </div>   
  )
}

export default ButtonContainer
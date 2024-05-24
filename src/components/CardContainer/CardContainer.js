import React, { useRef, useEffect } from 'react';
import './CardContainer.css';

const CardContainer = ({members, currentIndex, setCurrentIndex, setBgColor, getRandomColor}) => {
    const containerRef = useRef(null);
    const startX = useRef(0);
    const endX = useRef(0);
  
    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
    };
  
    const handleTouchMove = (e) => {
      endX.current = e.touches[0].clientX;
    };
  
    const handleTouchEnd = () => {
      if (startX.current - endX.current > 50) {
        showNextCard();
      } else if (endX.current - startX.current > 50) {
        showPrevCard();
      }
    };
  
    const showNextCard = () => {
      if (currentIndex < members.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setBgColor(getRandomColor());
      }
    };
  
    const showPrevCard = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setBgColor(getRandomColor());
      }
    };
  
    useEffect(() => {
      const container = containerRef.current;
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
  
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }, [currentIndex]);


  return (
    <div className="card-container" ref={containerRef}>
        {members.map((member, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%) rotateY(${(index - currentIndex) * 15}deg)`
            }}
          >
            <img src={member.picture} alt={member.name} />
            <div className="name">{member.name}</div>
            <div className="position">{member.position}</div>
          </div>
        ))}
      </div>
  )
}

export default CardContainer
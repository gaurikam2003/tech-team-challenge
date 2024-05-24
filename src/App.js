import React, {useEffect} from 'react';
import './App.css';
import data from './members_details.json'

// const memberBoxes = document.querySelectorAll('.oc-member');
// window.addEventListener('scroll', checkPosition);

// function checkPosition(){
//   const triggerHeight = window.innerHeight / 5 * 4;
//   memberBoxes.forEach(member => {
//     const memberTop = member.getBoundingClientRect().top;
//     if(memberTop < triggerHeight){
//       member.classList.add('show');
//     } else {
//       member.classList.remove('show');
//     }
//   });
// }

function makeMember({ name, position, picture }) {
  return (
    <div className="oc-member">
      <img src={picture} alt={name} className = "oc-member-img" />
      <div className="name">{name}</div>
      <div className="position">{position}</div>
    </div>
  );
}

function App() {
  useEffect(() => {
    // const checkPosition = () => {
    //   const triggerHeight = window.innerHeight / 5 * 4;
    //   const memberBoxes = document.querySelectorAll('.oc-member');
    //   memberBoxes.forEach(member => {
    //     const memberTop = member.getBoundingClientRect().top;
    //     if (memberTop < triggerHeight) {
    //       member.classList.add('show');
    //     } else {
    //       member.classList.remove('show');
    //     }
    //   });
    // };

    const checkPosition = () => {
      const triggerHeight = window.innerHeight / 5 * 4;
      const memberBoxes = document.querySelectorAll('.oc-member');
      console.log('Number of .oc-member elements:', memberBoxes.length);
      
      memberBoxes.forEach((member, index) => {
        console.log(`Element ${index}:`, member);
        if (!member) {
          console.log(`Element ${index} is null or undefined.`);
          return; // Skip further processing for null or undefined elements
        }
        
        const memberTop = member.getBoundingClientRect().top;
        console.log(`Element ${index} top position:`, memberTop);
        
        if (memberTop < triggerHeight) {
          member.classList.add('show');
        } else {
          member.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', checkPosition);
    // Call checkPosition initially to show elements that are already in view
    checkPosition();

    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  return (
    <div className="App">
      <header class="main-title">
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About the Team</a></li>
            <li><a href="/">FAQ</a></li>
            <li> <a href="/">Register!</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <h1 class="page-title">Meet the Orientation Committee!</h1>
      </div>
      <div className="oc-members-container">
        {data.map((member, index) => (
          makeMember({
            key: member.name,
            name: member.name,
            position: member.position,
            picture: member.picture
          })
        ))}
      </div>
    </div>
  );
}

export default App;

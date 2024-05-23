import React from 'react';
import './App.css';
// import data from './members_details.json'
import Members from './Members';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Members />
    </div>
  );
}

export default App;

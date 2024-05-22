import React from 'react';
import './App.css';
import MembersList from './components/MembersList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Orientation Committee</h1>
                
            </header>
            <p className="intro-box">The Orientation Committee is dedicated to ensuring a smooth transition 
                    for incoming students during Frosh Week. They provide support, organize events, and facilitate connections to 
                    help new students feel welcome and comfortable.</p>
            <MembersList />
        </div>
    );
}

export default App;

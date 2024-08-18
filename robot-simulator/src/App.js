// src/App.js
import React from 'react';
import Robot from './components/robot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robot Simulator</h1>
      </header>
      <main>
        <Robot />
      </main>
    </div>
  );
}

export default App;



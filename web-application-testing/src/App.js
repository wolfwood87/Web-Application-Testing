import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ScoreBoard from './Components/ScoreBoard.js';

function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <button>Pitch</button>
    </div>
  );
}

export default App;

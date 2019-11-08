import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ScoreBoard from './Components/ScoreBoard.js';
import Bases from './Components/Bases.js';


function App() {
  const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  `
  return (
    <AppContainer className="App">
      <Bases />
      <ScoreBoard />
      <button>Pitch</button>
    </AppContainer>
  );
}

export default App;

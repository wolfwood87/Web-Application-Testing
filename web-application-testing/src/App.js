import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBoard from './Components/ScoreBoard.js';
import Bases from './Components/Bases.js';


function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [message, setMessage] = useState('Here comes the pitch!');
  const [base, setBase] = useState({id: 0, name: ''});
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [onBase, setOnBase] = useState([]);
  const [bases, setBases] = useState ({first: false}, {second: false}, {third: false}, {fourth: false})
  const [random, setRandom] = useState(Math.floor(Math.random() * Math.floor(10)));
  const [outs, setOuts] = useState(0);
  const [team, setTeam] = useState(true);
  const [teamName, setTeamName] = useState();

  useEffect(() => {
    (outs>=3) ? changeTeam() : setTeam(team)
  }, [outs])
  useEffect(() => {
    (team===true) ? setTeamName('Home Team') : setTeamName('Away Team')
  }, [team])


  const changeTeam = () => {
    setTeam(!team)
    setOuts(0)
  }
  const foul = () => {
    if (strikes<=1) {
      setStrikes(strikes + 1);
      setMessage('Foul Ball!')
    }
    else{
      setMessage('Foul Ball! Still two strikes.')
    }
  }

  const increaseBalls = () => {
    if (balls<=2) {
      setBalls(balls + 1);
      setMessage('Ball.')
    }
    else {
      setStrikes(0);
      setBalls(0);
      setOnBase([...onBase, ', ', 1])
      setMessage("Ball. Take your base.")
    }
  }

  const increaseStrikes = () => {
    if(strikes<=1) {
      setStrikes(strikes + 1);
      setMessage('Strike!')
    }
    else {
      setStrikes(0);
      setBalls(0);
      setOuts(outs + 1);
      setMessage("Third Strike. You're out!")
    }
  }

  const hit = () => {
    let random = Math.floor(Math.random() * Math.floor(10))
    setBalls(0);
    setStrikes(0);
    (random<= 3) ? (
      setBase({id: 1, name: 'Single'})
     ) : (random <= 6) ? (
      setBase({id: 2, name: 'Double'})
      ) : (random <= 8)  ? (
      setBase({id: 3, name: 'Triple'})
       ) : (
      setBase({id: 4, name: 'Home Run'})
       )
    hitBases();
    console.log(random)
  }

  const hitBases = () => {
    setOnBase([onBase + ", " + base.id])
    if(base.id===1) {
      setBases({first: true})
    }
    else if(base.id===2) {
      setBases({second: true})
    }
    else if(base.id===3) {
      setBases({third: true})
    }
    else if(base.id === 4) {
      (team===true) ? setHomeScore(homeScore + 1) : setAwayScore(awayScore + 1)
    }
    setMessage(`It was a ${base.name}!`)
  }

  const pitch = () => {
    let random = Math.floor(Math.random() * Math.floor(10))
    if (random<3) {
      {increaseBalls()}
    }
    else if (random <6) {
      {increaseStrikes()}
    }
    else if (random < 8) {
      {foul()}
    }
    else{
      {hit()}
    }
  }


  return (
    <div className="App" data-test='app-Com'>
      <p>{teamName} up to bat.</p>
      <Bases onBases={bases} />
      <ScoreBoard homeScore={homeScore} awayScore = {awayScore} outs = {outs} balls={balls} strikes={strikes}/>
      <button onClick={pitch}>Pitch</button>
      <p>{message}</p>
      <p>On Base: {onBase}</p>
    </div>
  );
}

export default App;

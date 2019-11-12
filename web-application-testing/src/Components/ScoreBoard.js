import React from 'react';

import Strikes from './Strikes.js';
import Balls from './Balls.js';

const ScoreBoard = (props) => {
    
    return (
        <div data-test='score-Com' className ="scoreboard">
            <div className="score-con">
                <p>Home Score</p>
                <p>{props.homeScore}</p>
            </div>
            <div className="score-nums">
                <div className="strike-ball">
                    <Strikes strikes={props.strikes} />
                    <Balls balls={props.balls} className="balls"/>
                </div>
                <p>Outs: {props.outs}</p>
            </div>
            <div className="score-con">
                <p>Away Score</p>
                <p>{props.awayScore}</p>
            </div>
        </div>
    )
}

export default ScoreBoard;
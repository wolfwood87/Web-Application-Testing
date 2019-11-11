import React from 'react';

import Strikes from './Strikes.js';
import Balls from './Balls.js';

const ScoreBoard = (props) => {
    
    return (
        <div data-test='score-Com'>
            <div>
                <p>Home Score</p>
                <p>{props.homeScore}</p>
            </div>
            <div>
                <Strikes strikes={props.strikes}/>
                <Balls balls={props.balls}/>
            </div>
            <div>
                <p>Away Score</p>
                <p>{props.awayScore}</p>
            </div>
        </div>
    )
}

export default ScoreBoard;
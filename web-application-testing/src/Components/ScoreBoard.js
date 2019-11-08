import React from 'react';
import styled from 'styled-components';
import Strikes from './Strikes.js';
import Balls from './Balls.js';

const ScoreBoard = () => {
    const Board = styled.div`
    height: 400px;
    width: 80%;
    border: 1px solid black;
    margin-bottom: 5%;
    `
    return (
        <Board>
            <Strikes />
            <Balls />
        </Board>
    )
}

export default ScoreBoard;
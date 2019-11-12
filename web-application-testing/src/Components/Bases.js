import React from 'react';
import '../App.css';

const bases = require('../img/bases.png')

const Bases = (props) => {
    return(
        <div>
            <img src={bases} />
            <p className={props.onBases.first ? 'bases base1' : 'hide'}>.</p>
            <p className={props.onBases.second ? 'bases base2' : 'hide'}>.</p>
            <p className={props.onBases.third ? 'bases base3' : 'hide'}>.</p>
        </div>
    )
}

export default Bases;
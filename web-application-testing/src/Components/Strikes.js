import React, {useState} from 'react';

const Strikes = (props) => {

return (
    <div data-test='strike-Com' className="strikes">
        <p>Strikes:</p> 
        <p>{props.strikes}</p>
    </div>
)
}
export default Strikes;
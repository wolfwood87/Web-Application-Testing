import React, {useState} from 'react';

const Balls = () => {
    const [balls, setBalls] = useState(0)

return (
    <div>Balls: {balls}</div>
)
}
export default Balls;
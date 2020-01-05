import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';


export default function UseEffectTest() {
    const [count, setCount] = useState(0);
    const latestCount = useRef(count);

    useEffect(() => {
        // Set the mutable latest value
        latestCount.current = count;
        setTimeout(() => {
            console.log(latestCount.current );
        }, 3000);
    });

    function handleAlertClick() {
        setTimeout(() => {
            console.log(count);
        }, 3000);
    };

    function handleIncClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>UseEffectTest  count: {count}</h1>

            <button onClick={handleIncClick}>Inc</button>
            <Button variant="contained" color="primary" onClick={handleAlertClick} >
                Primary
            </Button>
        </div>
    );
}
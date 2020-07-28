import React from 'react'
import Button from '@material-ui/core/Button';

export default function LoginBox() {
    const clickHandler = event => {
        alert('haha');
    }
    return (
        <div>
            <h1> LoginBox</h1>
            <Button onClick = {clickHandler} > Button </Button>
        </div>
    );
};
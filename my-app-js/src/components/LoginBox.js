import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

export default function LoginBox() {
    const classes = useStyles();

    const clickHandler = event => {
        alert('haha');
    }
    return (
        <div className= {classes.root}>
            <Button onClick={clickHandler} variant="contained" color="primary" > Button </Button>
            <Button onClick={clickHandler} variant="contained" color="secondary" > Button </Button>
        </div>
    );
};
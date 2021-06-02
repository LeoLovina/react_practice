import React, {useState, useEffect} from 'react'
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
    console.log('LoginBox'); 
    //const [person,setPerson] = useState([{id:0, age:0}, {id:1, age:0}]);

   // Note: reduce creates a new object 
   const initPersonObject = new Array(3).fill(null).reduce((objs, _, index)=>
   ({...objs, [index]: {id: index, age: 0}}), {});

   // Note: map creates an array
   const initPersonArray = new Array(3).fill(null).map((item, index)=> ({id: index, age: 0}));


   const [personObject,setPersonObject] = useState(initPersonObject);
   const [personArray,setPersonArray] = useState(initPersonArray);   
   const [count,setCount] = useState(0);
   const classes = useStyles();

   const clickPersonObjectHandler = event => {
    setPersonObject(preObj => {
        return ({...preObj, [count]: {id:count, age: preObj[count].age+1}}
        )});
}   

    const clickPersonArrayHandler = event => {
        setPersonArray(personArray.map(
            (o)=>{
                if (o.id===count)
                    return {...o, age: o.age+1};
                return o;    
            }
        ));
    }

    const clickCountHandler = event => {
        console.log (count);
        setCount( (count)=> count+1
        );
        console.log (count);
    }

    useEffect(()=>{
        console.log(personObject);
        console.log(personArray);
        console.log(count); 
        if (count === 0)
            setCount(1);
        console.log(count);            
    },[count, personArray, personObject]);

    return (
        <div className= {classes.root}>
            <Button onClick={clickPersonArrayHandler} variant="contained" color="primary" > Person Array</Button>
            <Button onClick={clickPersonObjectHandler} variant="contained" color="primary" > Person Object</Button>
            <Button onClick={clickCountHandler} variant="contained" color="secondary" > Counter </Button>
        </div>
    );
};
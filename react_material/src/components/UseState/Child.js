import React from "react";
import Label from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

export default function Child(props){
    const {name, parentClick} = props;

    function handleChild1(e){
        console.log(e);
    }

    const handleChild2  = name => event =>{
        console.log("name: " + name);
        console.log("event: " + event);
    }

    const handleChild3 = event => {
        console.log(event);
    }
    return (
        <div>
        <Label color="blue">This is Child: {name}</Label>
        <Button onClick = {parentClick}>parent click</Button>  
        <Button onClick = {handleChild1}>handleChild1</Button>  
        <Button onClick = {handleChild2('handleChild2')}>handleChild2</Button>  
        <Button onClick = {handleChild3('handleChild3')}>handleChild3</Button>  
        <button onClick = {handleChild1} >button A</button>
        <button onClick = {handleChild2('button B')} >button B</button>
        </div>
    );
}
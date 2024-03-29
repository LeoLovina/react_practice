import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title:"Invalid input", message:"Please .."});
            return;
        }
        if (+enteredAge < 1) {
            setError({title:"Invalid age", message:"Please enter a valid age (>0)"});
            return;
        }
        const enteredData = {
            "id": Math.random(),
            "UserName": enteredUserName,
            "Age": enteredAge
        };
        props.onAddUser(enteredData);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
            {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit" onClick={addUserHandler}>Add User </Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
import React, { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsVaild, setFormIsValid] = useState(false);
  const enteredNameIsVaild = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsVaild && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsVaild)
      setFormIsValid(true);
    else
      setFormIsValid(false);
  }, [enteredNameIsVaild]);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }
  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsVaild) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name is required</p>}
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

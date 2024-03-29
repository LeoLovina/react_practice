import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// the reducer function is called by React
// state: previous state
// action: action in this call
const emailReducer = (state, action) => {
  console.log("emailReducer");
  console.log(state);
  console.log(action);
  if (action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'USER_BLUR'){
    return { value: state.value, isValid: state.value.includes('@')}
  }
  return { value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT'){
    return { value: action.val, isValid: action.val.trim().length > 6};
  }
  if (action.type === 'PASSWORD_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 6}
  }
  return { value: '', isValid: false};
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    {value:'', isValid: true}
  );
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    {value:'', isValid: true}
  );  

  //  object de-structuring syntax
  const { isValid:emailIsVaild} = emailState;
  const { isValid:passwordIsVaild} = passwordState;
  
  useEffect(()=>{
    console.log("Login useEffect");
    const timeoutHandler = setTimeout(()=>{
      console.log("Login useEffect - setFormIsValid");
      setFormIsValid(
        emailIsVaild && passwordIsVaild
      );
    }, 500);

    return ()=>{
      console.log("Cleanup");
      clearTimeout(timeoutHandler);
    };
  }, [emailIsVaild, passwordIsVaild]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type:'PASSWORD_INPUT', val: event.target.value})
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'USER_BLUR'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'PASSWORD_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

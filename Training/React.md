# Concept
- React is a JavaScript library for building user interfaces
- All about components. All user interfaces in the end are made up of components
    - combine HTML, CSS and JavaScript in components
    - combine components together to build user interface. 
- nodejs
    - It isn't directly related to React. It's not the end a runtime for JavaScript which would allow you to run JavaScript code outside of the browser. 
    - Use node.js for development preview server
- use NPM to transform the JSX to javascript code  
- A component in React is just a JavaScript function. A special JavaScript function that use JSX code to return HTML.
- JSX code is just syntactic suger and has transformed two methods called on React object.
	- call them JSX element
- Split an application into smaller building blocks (components). Every component is focused on one core task. 
- Always have one component per file
	- But if you have a component that is really only getting used by the other component in that file, having both components in the same fall can make sense too.
# props
- are arguments passed into React components.
- are passed to components via HTML attributes
``` javascript 
<Component name='John' /> 

function Component(props){
    return (<div>Hello {props.name} <div>)
}
```
## props.children 
- is a built property. 
- is a reserved name in props
- it is used to display whatever you include between the opening and closing tags when invoking a component.
``` javascript
const Card = (props) =>{
    return <div>
        {props.children}
    </div>
};
```
``` javascript 
<Card>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number"></input>
        <button type="submit" >Add User</button>
    </form>
</Card>
```


# sub folder
- general user interface component
- feature specific component

# Events
- React exposes all default events as props which start with on and then event name with a capital character. For example onClick.

# State
- The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
- useState always returns an array with exactly two elements.
    - the first element is the current state value. (for read state's value)
    - the second element is a function for updating that. (for write state's value)
    - example ``` const [title, setTitle] = useState(props.title) ```
- When a state's value is changed, React will re-evaluate the component.
- State is separated on a per component instance basis.
- use state with basic type.
    ``` javascript 
    const [enteredTitle, setEnterdTitle] = useState(''); 
    const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
    }; 
    ```
- use state with object
    ``` javascript
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: 0,
        enteredDate: ''
    }); 
    ``` 
    If you only update the value with ``` setUserInput({ enteredTitle : event.target.value }) ```, then the other values will be lose. You need to use spread operator to pulls out all the key value pairs. and adds them to the new object. 
    ``` javascript
    const titleChangeHandler = (event) => {
        setUserInput({
            ...useState,
            enteredTitle : event.target.value
        })
    };  
    ```
    Reacts schedules state updates, it doesn't perform them instantly. The above update is depends on the previous state value. It could be depending on an outdated or incorrect state snapshot. The following approach can have React guarantee that the state snapshot it gives you here in this inner function, will always be the latest state snapshot,
    ``` javascript 
        const titleChangeHandler = (event) => {
        setUserInput((preState)=> {
            return {...preState,  enteredTitle : event.target.value}
        });
    };
    ```
    We should use this function syntax here whenever your state update depends on the previous state.
-  typically you end up with less state full components than with state less components. Because you wanna split up your application into small reusable pieces and most pieces, most components indeed will only focus on outputting something, on having some JSX code,
# Pass data from child to parent (lift the start up)
Parent
``` javascript
const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseDate) =>{
        const expendData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} /> 
    </div>
}
```
Child
``` javascript
const ExpenseForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseDataHandler(expenseData);
    };

    return <form onSubmit={submitHandler}>
    </form>
};
```
# Rending Lists & Conditional Content
- map
    - before
    ``` javascript 
    <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
    ```
    - after
    ``` javascript 
    {props.items.map(
        (expense, index)=> <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
    )}
    ```
- unique id in the list item
    - Good: use uniqie id to identify the item.
    ``` javascript 
    props.items.map(
        (expense, index)=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
    )
    ```
    - Bad: this index is not always given to the same item.
    ``` javascript 
    props.items.map(
        (expense, index)=> <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
    )    
    ```
- having a lean JSX snippet
    - Better
    ``` javascript 
        const expenseContent = filteredExpenses.length === 0 ?
            <p>No expenses found</p> :
            filteredExpenses.map(
                (expense, index) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            )
        return (
        <div>
            {expenseContent}
        </div>
    )
    ```
    - Not good
    ``` javascript 
    return (
        <div>
            {filteredExpenses.length === 0 ?
                <p>No expenses found</p> :
                filteredExpenses.map(
                    (expense, index) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )}
        </div>
    )
    ```
# Conditional & Dynamic Styles
## Style attribute
``` { style object} ```. 
- The style object is a JavaScript object. 
- camelCased Property Names
- For example, 
``` <div className="chart-bar__fill" style={{ height: barFillHeight, backgroundColor: 'red' }}></div> ``` 
    - the style object is ``` { height: barFillHeight, backgroundColor: 'red' } ```
    - Use backgroundColor instead of background-color

## Styling component
- scoping styles to components, so for setting up styles only affect the component
- global styles.
# React DOM
React DOM is kind of the adapter for React to the browser. 

# Fragment
- Since React cannot return more than one "root" JSX element, we can add a div to wrappe our components. But it will generate unnecessary HTML. How to write cleaner code, to end up with less unnecessary HTML elements on the final page.
- solution A - wrapper component
    ``` javascript
    const Wrapper = props => {
        return props.children;
    }
    ```
- solution B - built-in wrapper
    ``` javascript
    <> 
        <h1>This is a built-in wrapper </h1>
    </>
    ```
- solution C - Fragment
    ``` javascript 
     return (
        <React.Fragment>
        <ChildA />
        <ChildB />
        <ChildC />
        </React.Fragment>
    );
    ```
# portal
- The portal component renders its children into a new "subtree" outside of current DOM hierarchy. The rendered HTML content is moved somewhere else.
	- file ErrorModal.js
	``` javascript 
	import  ReactDOM  from "react-dom";

	// define a portal component
	const Backdrop = (props) => {
		return <div className={classes.backdrop} onClick={props.onConfirm} />;
	  };

	// tell portal component where to display
	const ErrorModal = (props) => {
		return (
		  <React.Fragment>
			{ReactDOM.createPortal(
			  <Backdrop onConfirm={props.onConfirm} />,
			  document.getElementById('backdrop-root')
			)}
		  </React.Fragment>
		);
	  };

	```
	- index.html
	``` html
	 <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    <div id="root"></div>
	```
# ref 

# Effects, Reducer & Context
## Effects
- React has a main job to render the UI and to re-render UI when it's needed. Re-evaluate Component upon State & Prop Changes
- the effect function is called once after component evaluation
- ```useEffect(()=>{effect function}, [ dependencies ]);```
    - effect function: A function that should be executed After every component evaluation IF the specified dependencies changed.
    - Dependencies of this effect
- Example A. without dependence
    ``` javascript
    useEffect(() => {
        const storageUserLoggedInInformation = localStorage.getItem("isLoggedIn");
        if (storageUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
        }
    }, []);
    ```
- Exmple B. with depenedence
    ``` javascript 
        useEffect(()=>{
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    }, [enteredEmail, enteredPassword]);
    ```
- Example C. with debounce
    ``` javascript 
    useEffect(()=>{
        console.log("Login useEffect");
        setTimeout(()=>{
            console.log("Login useEffect - setFormIsValid");
            setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 1000);
    }, [enteredEmail, enteredPassword]);
    ```   
- Example D. with cleanup - 
    - cleanup function helps developers clean effects that prevent unwanted behaviors and optimizes application performance
    - cleanup function will run as a cleanup process before useEffect executes this function the next time.
    ``` javascript 
    useEffect(() => {
            effect
            return () => {
                cleanup
            }
        }, [input])    
    ```
    ``` javascript 
    useEffect(()=>{
        console.log("Login useEffect");
        const timeoutHandler = setTimeout(()=>{
        console.log("Login useEffect - setFormIsValid");
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    }, 500);

    return ()=>{
        console.log("Cleanup");
        clearTimeout(timeoutHandler);
        };
    }, [enteredEmail, enteredPassword]);
    ```
## Reducer
- Problem: the value on setFormIsValid depends on the previous state ``` enteredEmail```. The ```enteredEmail``` may not contain the latest value. Need to use the function form. 
``` javascript 
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes('@') && event.target.value.trim().length > 6
    );
  };
```
- When to use useReducer
    - complex state updating logic where you always are guaranteed to work with the latest state snapshot.
    - you can move that potentially more complex logic out of your component function body into a separate reducer function.
``` javascript 
    const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```
    - state: the state snapshot used in the component
    - dispatchFn: a function that can be used to dispatch a new action (dispatch an action)
    - reducerFn: (preState, action) => newState
        - this function is triggered automatically once an action is dispatched (via dispatchFn())
        - React will call this reducer function whenever a new action is dispatched.
        - The reducer function can be created outside on component because it does not need to interact with anything defined inside of the component.
- Example
    - reducerFn
    ``` javascript 
    // the reducer function is called by React
    // state: previous state
    // action: action in this call
    const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.includes('@')};
    }
    if (action.type === 'USER_BLUR'){
        return { value: state.value, isValid: state.value.includes('@')}
    }
    return { value: '', isValid: false};
    };
    ```
    -  useReducer
    ``` javascript 
    const [emailState, dispatchEmail] = useReducer(
        emailReducer,
        {value:'', isValid: false}
    );
    ```  
    - dispatchFn 
    ``` javascript
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    ```
- using object destructuring to add object properties as dependencies to useEffect().
    - pass specific properties instead of the entire object as a dependency
    ``` javascript
    const { someProperty } = someObject;
    useEffect(() => {
    // code that only uses someProperty ...
    }, [someProperty]);
    ```
    - object de-structuring ``` const { isValid:emailIsVaild} = emailState; ``` 
        - let emailIsVaild = emailState.isValid
## Context
- Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
- Don't need prop chian. 
- Example: Provider & Consumer | useContext
    - define context
    ``` javascript 
    import React from "react";
    const AuthContext = React.createContext({
        isLoggedIn: false,
        onLogout: ()=>{}
    });
    export default AuthContext;
    ```
    - wrap context component ``` <MyContext.Provider value={/* some value */}> ```
    ``` javascript 
    <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}>
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    ```
    - consuming context
        - Context.Consumer
        ``` javascript
        <MyContext.Consumer>
        {value => /* render something based on the context value */}
        </MyContext.Consumer>
        ```
    ``` javascript 
    const Navigation = (props) => {
        return (
            <AuthContext.Consumer>
            {(ctx) => {
                return (<nav className={classes.nav}>
                <ul>
                    {ctx.isLoggedInaa && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                    )}
                </ul>
                </nav>
                )
            }}
            </AuthContext.Consumer>
        );
    };
    ```
    - useContext
    ``` javascript 
    import React, { useContext} from 'react';
    import AuthContext from '../../store/auth-context';
    const Navigation = (props) => {
        const ctx = useContext(AuthContext);
        return (
            <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedInaa && (
                <li>
                    <a href="/">Users</a>
                </li>
                )}
            </ul>
            </nav>
        );
    };
    ```
    - it's not great for high-frequency changes.

# Sending Http Requests
## fetch API
- The Fetch API is built into browsers and it allows us to fetch data and actually also to send data
- Example: Asynchronous
``` javascript 
  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const transformedMovies = data.results.map((m) => {
          return {
            id: m.episode_id,
            title: m.title,
            openingText: m.opening_crawl,
            releaseDate: m.release_date
          }
        });
        setMovies(transformedMovies);
      });
  }
```
- Example: Synchronous.  execute step after step
``` javascript
const fetchMoviesHandler = async () => {
    console.log('fetchMoviesHandler')
    const response = await fetch("https://swapi.dev/api/films");
    console.log('data')
    const data = await response.json();

    console.log('transformedMovies')
    const transformedMovies = await data.results.map((m) => {
      return {
        id: m.episode_id,
        title: m.title,
        openingText: m.opening_crawl,
        releaseDate: m.release_date
      }
    });
    setMovies(transformedMovies);
  }
```
# refreance
- https://github.com/academind/react-complete-guide-code
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
- ```useEffect(()=>{sideEffect function}, [ dependencies ]);```
    - sideEffect function: A function that should be executed After every component evaluation IF the specified dependencies changed.
    - Dependencies of this effect

# refreance
- https://github.com/academind/react-complete-guide-code
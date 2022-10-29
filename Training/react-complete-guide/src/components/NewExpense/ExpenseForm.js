import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnterdTitle] = useState('');
    const [enteredAmount, setEnterdAmount] = useState('');
    const [enteredDate, setEnterdDate] = useState('');
    const [addExpense, setAddExpense] = useState(false);

    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value);
    };    

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log(expenseData);
        props.onSaveExpenseDataHandler(expenseData);
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
        setAddExpense(false);
    };

    const cancelHandler = (event) => {
        setAddExpense(false);
    }

    const addNewExpenseHandler = (event) => {
        setAddExpense(true);
    }    

    if (addExpense===false){
        return <button type="submit" onClick={addNewExpenseHandler}>Add New Expense</button>
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" onChange={dateChangeHandler}/>
            </div>            
        </div>
        <div className="new-expense__actions">
            <button onClick={cancelHandler} >Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
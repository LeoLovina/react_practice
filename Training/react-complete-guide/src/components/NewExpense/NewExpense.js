import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseDate) =>{
        const expendData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        console.log(expendData);
        props.onAddExpense(expendData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} /> 
    </div>
}

export default NewExpense;
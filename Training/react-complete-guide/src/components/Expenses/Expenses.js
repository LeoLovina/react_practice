import './Expenses.css';
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpnseFilter from "./ExpensesFilter";
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState('2020');
    const selectedYearHadnler = (year) => {
        console.log(year);
        setFilterdYear(year);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpnseFilter selected={filterdYear} onSelectedYear={selectedYearHadnler} />
                {props.items.map(
                    (expense, index)=> <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
                )}
            </Card>
        </div>

    )
}

export default Expenses;
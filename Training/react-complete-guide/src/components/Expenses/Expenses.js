import './Expenses.css';
import React, { useState } from 'react';
import ExpnseFilter from "./ExpensesFilter";
import ExponseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChar';
const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState('2020');
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filterdYear);
    const selectedYearHadnler = (year) => {
        setFilterdYear(year);
        console.log(year);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpnseFilter selected={filterdYear} onSelectedYear={selectedYearHadnler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExponseList items={filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses;
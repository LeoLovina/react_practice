import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: '1', title: 'Toilet Paper', amount: 94.12, date: new Date(2022, 1, 20) },
  { id: '2', title: 'Car Insurance', amount: 194.12, date: new Date(2022, 5, 2) },
  { id: '3', title: 'Food', amount: 94.12, date: new Date(2022, 1, 12) },
  { id: '4', title: 'Food', amount: 80.12, date: new Date(2022, 2, 12) },
  { id: '5', title: 'Food', amount: 60.12, date: new Date(2022, 4, 12) }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

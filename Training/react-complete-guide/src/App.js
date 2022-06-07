import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id:'1', title:'Toilet Paper', amount: 94.12, date: new Date(2022,1,20)},
    { id:'2', title:'Car Insurance', amount: 194.12, date: new Date(2022,5,2)},
    { id:'3', title:'Food', amount: 94.12, date: new Date(2022,1,12)}
  ]
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;

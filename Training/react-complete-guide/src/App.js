import './App.css';
import Expenses from './components/Expenses';


function App() {
  const expenses = [
    { id:'1', title:'Toilet Paper', amount: 94.12, date: new Date(2022,1,20)},
    { id:'2', title:'Car Insurance', amount: 194.12, date: new Date(2022,5,2)},
    { id:'3', title:'Food', amount: 94.12, date: new Date(2022,1,12)}
  ]
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

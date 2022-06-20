import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
    // const expenses = [
    //     { id:'1', title:'Toilet Paper', amount: 94.12, date: new Date(2022,1,20)},
    //     { id:'2', title:'Car Insurance', amount: 194.12, date: new Date(2022,5,2)},
    //     { id:'3', title:'Food', amount: 94.12, date: new Date(2022,1,12)}
    //   ]
    return (
        <Card className='expenses'>
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
        </Card>
    )
}

export default Expenses;
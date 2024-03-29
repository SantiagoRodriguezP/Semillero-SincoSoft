import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from './Card';
import '../index.css'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log("Expense item");
    //let title = props.title;

    const clickHandler = () => {
    //   title="Udpated"; //Esto no funciona así
        setTitle("Updated!");
        
       console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={()=>{clickHandler()}}>Change title</button>
        </Card>
    );
}


export default ExpenseItem;
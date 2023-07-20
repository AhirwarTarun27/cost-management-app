import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

export default function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((obj) => (
        <ExpenseItem title={obj.title} amount={obj.amount} date={obj.date} />
      ))}
    </Card>
  );
}

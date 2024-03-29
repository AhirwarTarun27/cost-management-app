import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((obj) => (
        <ExpenseItem
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

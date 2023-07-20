import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isCancel, setIsCancel] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsCancel(true);
  };

  const handleCancelForm = (isCancel) => {
    setIsCancel(isCancel);
  };
  const handleNewExpense = () => {
    setIsCancel(false);
  };
  return (
    <div className="new-expense">
      {isCancel ? (
        <button onClick={handleNewExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={handleCancelForm}
        />
      )}
    </div>
  );
};

export default NewExpense;

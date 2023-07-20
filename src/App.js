import { useState } from 'react';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Fan',
    amount: 235.5,
    date: new Date('2022-04-10'),
  },
  {
    id: 2,
    title: 'Car',
    amount: 23545455.5,
    date: new Date('2022-04-15'),
  },
  {
    id: 3,
    title: 'Gun',
    amount: 233.899,
    date: new Date('2022-04-20'),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;

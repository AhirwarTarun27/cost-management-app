import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expense = [
    {
      title: 'Fan',
      amount: 235.5,
      date: new Date('2023-04-10'),
    },
    {
      title: 'Car',
      amount: 23545455.5,
      date: new Date('2023-04-15'),
    },
    {
      title: 'Gun',
      amount: 233.899,
      date: new Date('2023-04-20'),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log('expense:', expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
};

export default App;

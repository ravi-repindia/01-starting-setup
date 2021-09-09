import React, {useState} from "react";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 94.12,
    date: new Date(2020, 1, 12),
  },
  {
    id: "e2",
    title: "new tv",
    amount: 194.12,
    date: new Date(2020, 1, 14),
  },
  {
    id: "e3",
    title: "car insurance",
    amount: 594.12,
    date: new Date(2020, 4, 12),
  },
];


 

  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }
    )
  };
  const yearChangeFilterHandler = (data) => {
    console.log(data);
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense onYearChangeFilter={yearChangeFilterHandler} items={expenses} />

      {/*  <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      /> */}
    </div>
  );
    }

export default App;

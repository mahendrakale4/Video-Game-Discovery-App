// import Form from './components/Form';
import { useState } from "react";
import ExpenseList from "./Expense-tracker/components/expenseList";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "AAA", amount: 10, category: "Utilities" },
    { id: 1, description: "AAA", amount: 10, category: "Utilities" },
    { id: 1, description: "AAA", amount: 10, category: "Utilities" },
  ]);

  return (
    <div>
      < ExpenseList
        expenses={expenses} 
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
// import Form from "./components/ExpenseForm";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList, { Expense } from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

const seedExpenses = [
  {
    id: 1,
    description: "Groceries",
    amount: 85,
    category: "Food",
  },
  {
    id: 2,
    description: "Electric Bill",
    amount: 120,
    category: "Utilities",
  },
  {
    id: 3,
    description: "Movie Tickets",
    amount: 30,
    category: "Entertainment",
  },
  {
    id: 4,
    description: "Gas",
    amount: 45,
    category: "Transportation",
  },
  {
    id: 5,
    description: "Dinner",
    amount: 60,
    category: "Food",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [expenses, setExpenses] = useState(seedExpenses);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(data) => {
          setExpenses([...expenses, { ...data, id: Date.now() }]);
        }}
      />
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((expense) => expense.id !== id));
        }}
      />
    </div>
  );
}

export default App;

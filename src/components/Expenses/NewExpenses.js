import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./NewExpenses.css";
import { useState } from "react";
const NewExpenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default NewExpenses;

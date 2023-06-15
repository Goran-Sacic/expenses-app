import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [chosenYear, setChosenYear] = useState("2020");

  const handleYearChange = (selectedYear) => {
    setChosenYear(selectedYear);
    console.log("Expenses.js is logging year " + selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === chosenYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={chosenYear} onYearChange={handleYearChange} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [chosenYear, setChosenYear] = useState("2020");

  const handleYearChange = (selectedYear) => {
    setChosenYear(selectedYear);
    console.log("Expenses.js is logging year " + selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={chosenYear} onYearChange={handleYearChange} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

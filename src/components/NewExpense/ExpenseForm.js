import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [activeForm, setActiveForm] = useState(false);

  const handleCancel = () => {
    setActiveForm(false);
  };

  const handleAddNewExpense = () => {
    setActiveForm(true);
  };

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
    console.log("Title changed!");
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
    console.log("Amount changed!");
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
    console.log("Date changed!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setActiveForm(false);
  };

  return (
    <div>
      {activeForm === true ? (
        <form onSubmit={handleSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Naziv troška</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Iznos (€)</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={handleAmountChange}
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Datum</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                value={enteredDate}
                onChange={handleDateChange}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={handleCancel}>
              Prekid
            </button>
            <button type="submit">Dodaj</button>
          </div>
        </form>
      ) : (
        <div className="new-expense__controls__cancel">
          <div className="new-expense__actions">
            <button type="button" onClick={handleAddNewExpense}>
              Dodaj novi trošak
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;

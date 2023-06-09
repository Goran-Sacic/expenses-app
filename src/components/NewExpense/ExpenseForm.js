import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
    /* setUserInput({           --- this is not very good
      ...userInput,         --- this is not very good
      enteredTitle: e.target.value,         --- this is not very good
    });          --- this is not very good */
    console.log("Title changed!");
    // Following up on previous example on how to change state, this is a much better way of changing
    // state of an object which relies on previous state of the object (i.e. updating some state
    // based on previous value), we should pass a function to the state updating function;
    /* setUserInput((prevState) => {       --- this is good
      return { ...prevState, enteredTitle: e.target.value };       --- this is good
    });     --- this is good */
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    }); */
    console.log("Amount changed!");
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    }); */
    console.log("Date changed!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // We set value={enteredTitle} to an empty string since on form submit setEnteredTitle sets title to an empty string. We do the same for amount and date.
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

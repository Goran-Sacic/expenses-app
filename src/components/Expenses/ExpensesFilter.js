import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onYearChange, selected }) => {
  const handleFilter = (e) => {
    const selectedYear = e.target.value;
    onYearChange(selectedYear);
    console.log("Chosen year is: " + e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtriraj po godini</label>
        <select value={selected} onChange={handleFilter}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

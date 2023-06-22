import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Sij", value: 0 },
    { label: "Velj", value: 0 },
    { label: "Ožu", value: 0 },
    { label: "Tra", value: 0 },
    { label: "Svi", value: 0 },
    { label: "Lip", value: 0 },
    { label: "Srp", value: 0 },
    { label: "Kol", value: 0 },
    { label: "Ruj", value: 0 },
    { label: "Lis", value: 0 },
    { label: "Stu", value: 0 },
    { label: "Pro", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

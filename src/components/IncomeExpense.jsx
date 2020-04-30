import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((item) => item.amount);
  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
  const expenses = Math.abs(
    amounts
      .filter((item) => item < 0)
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+#{incomes}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-#{expenses}</p>
      </div>
    </div>
  );
};
export default IncomeExpense;

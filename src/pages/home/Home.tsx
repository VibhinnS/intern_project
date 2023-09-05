import React, { useState } from "react";
import "./Home.scss";
import Profitabilitychart from "../../components/profitability-chart/profitabilitychart";
import Revenue from "../../components/revenue/Revenue";
import Expense from "../../components/expenses/Expenses";
import MonthlyProfitability from "../../components/monthly-profitability/monthly-profitability";
import MonthlyExpenses from "../../components/monthly-expenses/monthly-expenses";

const Home: React.FC = () => {
  const [inputRevenueValues, setRevenueInputValues] = useState([]);
  const [inputExpenseValues, setExpenseInputValues] = useState([]);

  return (
    <div className="home">
      <div className="box box2">
        <Profitabilitychart revenue={inputRevenueValues} expense={inputExpenseValues} />
      </div>
      <div className="box box1">
        <Revenue setInputValues={setRevenueInputValues} inputValues={inputRevenueValues} />
      </div>
      <div className="box box5">
        <MonthlyProfitability revenue={inputRevenueValues} />
      </div>
      <div className="box box6">
        <MonthlyExpenses />
      </div>
      <div className="box box4">
        <Expense setInputValues={setExpenseInputValues} inputValues={inputExpenseValues} />
      </div>
      <div className="box box7">Box7</div>
    </div>
  );
};

export default Home;

import "./Home.scss"
import Profitabilitychart from "../../components/profitability-chart/profitabilitychart";
import Revenue from "../../components/revenue/Revenue";
import Expense from "../../components/expenses/Expenses";
import { useState } from "react";

const Home = () => {
  const [inputRevenueValues, setRevenueInputValues] = useState([])
  const [inputExpenseValues, setExpenseInputValues] = useState([])
    return (
    <div className="home">
      <div className="box box1">
        <Revenue setInputValues = {setRevenueInputValues} inputValues={inputRevenueValues}/>
      </div>
      <div className="box box2">
        <Profitabilitychart revenue={inputRevenueValues} expense={inputExpenseValues}/>
      </div>
      {/* <div className="box box3">Box3</div> */}
      <div className="box box4">
        <p className="box-heading">
          <Expense setInputValues={setExpenseInputValues} inputValues={inputExpenseValues}/>
        </p>
      </div>
      <div className="box box5">Box5</div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      {/* <div className="box box8">Box8</div>
      <div className="box box9">Box9</div> */}
    </div>
  );
};
export default Home;
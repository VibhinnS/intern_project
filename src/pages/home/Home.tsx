import "./Home.scss"
import Profitabilitychart from "../../components/profitability-chart/profitabilitychart";
import Revenue from "../../components/revenue/Revenue";
import Expense from "../../components/expenses/Expenses";
import {v4 as uuid} from "uuid";
import { useState } from "react";
import Firebase from "../../components/firebase/firebase";
import "firebase/firestore";

const Home = () => {
  const saveInput = (input) => {
    const saveToFireBase = Firebase.firestore();
    saveToFireBase.collection("inputs").add({
      id: uuid(),
      item: input
    })
  }
  const [inputRevenueValues, setRevenueInputValues] = useState([])
  const [inputExpenseValues, setExpenseInputValues] = useState([])
    return (
    <div className="home">
      <div className="box box2">
        <Profitabilitychart revenue={inputRevenueValues} expense={inputExpenseValues}/>
      </div>
      <div className="box box1">
        <Revenue setInputValues = {setRevenueInputValues} inputValues={inputRevenueValues}/>
      </div>
      {/* <div className="box box3">Box3</div> */}
      <div className="box box5">Box5</div>
      <div className="box box6">Box6</div>
      <div className="box box4">
          <Expense setInputValues={setExpenseInputValues} inputValues={inputExpenseValues}/>
      </div>
      <div className="box box7">Box7</div>
    </div>
  );
};
export default Home;
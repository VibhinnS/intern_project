import "./Home.scss"
import Expenses from "../../components/expenses/Expenses";
import Profitabilitychart from "../../components/profitability-chart/profitabilitychart";
import Revenue from "../../components/revenue/Revenue";
import { useState } from "react";

const Home = () => {
  const [inputValues, setInputValues] = useState([])
  return (
    <div className="home">
      <div className="box box1">
        <Revenue setInputValues = {setInputValues} inputValues={inputValues}/>
      </div>
      <div className="box box2">
        <div id="chart-container" style={{ width: '100%', height: '400px', marginBottom: '0px' }} />
        <Profitabilitychart data={inputValues}/>
      </div>
      {/* <div className="box box3">Box3</div> */}
      <div className="box box4">
        <p className="box-heading">
          <Expenses />
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
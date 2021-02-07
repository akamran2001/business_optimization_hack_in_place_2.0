import React from "react";
import Money_Graph from "./money_graph";
import InputButton from "./manual_input";
import CustHistogram from "./customer_histogram";

function home(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="row"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h1>Bizz Trak</h1>
          <p>Business Visualizations for the modern entrepenuer</p>
        </div>
        <div className="col-sm">
          <div className="row">
            <h1>Amount Purchased Throughout the Day</h1>
          </div>
          <div className="row">
            <Money_Graph />
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <h1>Customer Frequency vs Time Period</h1>
          </div>
          <div className="row">
            <CustHistogram />
          </div>
        </div>

        <div className="col-sm">
          <InputButton />
        </div>
      </div>
    </div>
  );
}

export default home;

import React from "react";
import Money_Graph from "./money_graph";
import CustHistogram from "./customer_histogram";

function home(props) {
  return (
    <div className="container">
      <div className="row">
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
      </div>
    </div>
  );
}

export default home;

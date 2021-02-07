import React from "react";
import Money_Graph from "./money_graph";
import CustHistogram from "./customer_histogram";

function home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Money_Graph />
        </div>
        <div className="col-sm">
          <CustHistogram />
        </div>
      </div>
    </div>
  );
}

export default home;

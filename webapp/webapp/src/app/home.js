import React from "react";
import Money_Graph from "./money_graph";

function home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Money_Graph />
        </div>
      </div>
    </div>
  );
}

export default home;

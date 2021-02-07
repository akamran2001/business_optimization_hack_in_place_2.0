import React from "react";
import { Chart } from "react-charts";
import Data from "../data.json";
function Money_Graph() {
  let date_price = Data.map((item) => {
    let currency = item["Purchase Price"];
    let price = currency.slice(1, currency.length);
    price = parseFloat(price);
    const date = new Date(item.DateTime);
    return {
      x: date,
      y: price,
    };
  });
  date_price = date_price.slice(15, 25);
  const data = React.useMemo(
    () => [
      {
        label: "Money Graph",
        data: date_price,
      },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "700px",
        height: "700px",
        background: "rgba(0, 27, 45, 0.9)",
      }}
    >
      <Chart data={data} axes={axes} series={series} tooltip dark />
    </div>
  );
  return lineChart;
}

export default Money_Graph;

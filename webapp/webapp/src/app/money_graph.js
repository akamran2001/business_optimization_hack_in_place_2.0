import React from "react";
import { Chart } from "react-charts";
import ResizableBox from "./ResizableBox";
function Money_Graph() {
  const data = React.useMemo(
    () => [
      {
        label: "G1",
        data: [
          { primary: new Date("2021-02-07T18:00:00.000"), secondary: 12 },
          { primary: new Date("2021-02-07T18:30:00.000"), secondary: 77 },
          { primary: new Date("2021-02-07T19:00:00.000"), secondary: 12 },
          { primary: new Date("2021-02-07T19:30:00.000"), secondary: 66 },
          { primary: new Date("2021-02-07T20:00:00.000"), secondary: 59 },
          { primary: new Date("2021-02-07T20:30:00.000"), secondary: 60 },
          { primary: new Date("2021-02-07T21:00:00.000"), secondary: 23 },
          { primary: new Date("2021-02-07T21:30:00.000"), secondary: 90 },
          { primary: new Date("2021-02-07T22:00:00.000"), secondary: 59 },
          { primary: new Date("2021-02-07T22:30:00.000"), secondary: 50 },
        ],
        color: "#d50000",
      },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "time" },
      {
        position: "left",
        type: "linear",
        stacked: true,
        format: (d) => `$${d}`,
      },
    ],
    []
  );

  const lineChart = (
    <ResizableBox
      style={{
        backgroundColor: "#263238",
      }}
    >
      <Chart
        data={data}
        series={series}
        axes={axes}
        tooltip
        primaryCursor
        secondaryCursor
        dark
      />
    </ResizableBox>
  );
  return lineChart;
}

export default Money_Graph;

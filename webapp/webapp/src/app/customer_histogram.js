import React from "react";
import { Chart } from "react-charts";
import fs from "fs";
import Data from "../data.json";

/* reading the mock data */

/*put the mock data into a chart*/
function CustHistogram() {
  // /*Create time groups*/
  // let timeGroups = [
  //   [0, 4],
  //   [4, 8],
  //   [8, 12],
  //   [12, 16],
  //   [16, 20],
  //   [20, 24],
  // ];
  // var d = {};
  // timeGroups.forEach((timeGroup) => {
  //   d[timeGroup] = 0;
  // });

  // /*count the purchases by time*/
  // Data.map((obj) =>
  //   Object.keys(d).forEach((key) => {
  //     if (
  //       parseInt(obj.DateTime.substring(11, 13)) >= key[0] &&
  //       parseInt(obj.DateTime.substring(11, 13)) < key[1]
  //     ) {
  //       d[key] += 1;
  //     }
  //   })
  // );

  // /*put the data in coordinate point form*/
  // var points = [];
  // for (var key in d) {
  //   points.push([key, d[key]]);
  // }

  /*insert the data into the graph*/
  const data = React.useMemo(
    () => [
      {
        label: "customer frequency vs time period",
        data: [
          { primary: new Date("2021-02-01 09:07:43"), secondary: 8 },
          { primary: new Date("2021-02-01 14:05:56"), secondary: 56 },
          { primary: new Date("2021-02-01 02:34:33"), secondary: 68 },
          { primary: new Date("2021-02-01 10:55:33"), secondary: 91 },
          { primary: new Date("2021-02-01 23:19:46"), secondary: 34 },
          { primary: new Date("2021-02-01 15:55:03"), secondary: 4 },
          { primary: new Date("2021-02-01 15:36:16"), secondary: 39 },
          { primary: new Date("2021-02-01 03:43:45"), secondary: 10 },
          { primary: new Date("2021-02-01 23:47:29"), secondary: 89 },
          { primary: new Date("2021-02-01 17:56:24"), secondary: 61 },
          { primary: new Date("2021-02-01 13:15:42"), secondary: 10 },
          { primary: new Date("2021-02-01 21:15:12"), secondary: 15 },
          { primary: new Date("2021-02-01 13:14:07"), secondary: 30 },
          { primary: new Date("2021-02-01 19:16:50"), secondary: 48 },
          { primary: new Date("2021-02-01 01:56:56"), secondary: 75 },
          { primary: new Date("2021-02-01 16:25:51"), secondary: 14 },
          { primary: new Date("2021-02-01 11:47:05"), secondary: 83 },
          { primary: new Date("2021-02-01 09:08:38"), secondary: 30 },
          { primary: new Date("2021-02-01 02:09:40"), secondary: 68 },
          { primary: new Date("2021-02-01 03:27:34"), secondary: 80 },
          { primary: new Date("2021-02-01 02:10:56"), secondary: 45 },
          { primary: new Date("2021-02-01 07:26:39"), secondary: 17 },
          { primary: new Date("2021-02-01 16:51:01"), secondary: 9 },
          { primary: new Date("2021-02-01 12:04:52"), secondary: 64 },
          { primary: new Date("2021-02-01 19:14:23"), secondary: 25 },
          { primary: new Date("2021-02-01 04:13:36"), secondary: 9 },
          { primary: new Date("2021-02-01 00:16:29"), secondary: 19 },
          { primary: new Date("2021-02-01 11:19:38"), secondary: 91 },
          { primary: new Date("2021-02-01 08:19:58"), secondary: 18 },
          { primary: new Date("2021-02-01 23:19:19"), secondary: 59 },
          { primary: new Date("2021-02-01 12:00:54"), secondary: 85 },
          { primary: new Date("2021-02-01 15:07:08"), secondary: 76 },
          { primary: new Date("2021-02-01 15:38:27"), secondary: 61 },
          { primary: new Date("2021-02-01 05:15:10"), secondary: 42 },
          { primary: new Date("2021-02-01 05:50:35"), secondary: 18 },
          { primary: new Date("2021-02-01 21:43:37"), secondary: 74 },
          { primary: new Date("2021-02-01 12:57:38"), secondary: 82 },
          { primary: new Date("2021-02-01 14:36:28"), secondary: 7 },
          { primary: new Date("2021-02-01 20:58:55"), secondary: 67 },
          { primary: new Date("2021-02-01 10:00:44"), secondary: 79 },
          { primary: new Date("2021-02-01 09:07:18"), secondary: 32 },
          { primary: new Date("2021-02-01 20:44:10"), secondary: 93 },
          { primary: new Date("2021-02-01 23:04:43"), secondary: 43 },
          { primary: new Date("2021-02-01 07:43:43"), secondary: 87 },
          { primary: new Date("2021-02-01 00:11:41"), secondary: 32 },
          { primary: new Date("2021-02-01 04:16:31"), secondary: 31 },
          { primary: new Date("2021-02-01 02:59:40"), secondary: 65 },
          { primary: new Date("2021-02-01 06:21:57"), secondary: 74 },
          { primary: new Date("2021-02-01 10:47:08"), secondary: 50 },
          { primary: new Date("2021-02-01 09:23:00"), secondary: 81 },
        ],
      },
    ],
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );
  const barChart = (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} series={series} tooltip />
    </div>
  );
  return barChart;
}

export default CustHistogram;

/* CONVERT CSV TO JSON

    function jsonConvert(data){
        let csv = fs.readFileSync(data)
        let arrayLines = csv.split("\n")
        let result = []
        let headers = arrayLines[0].split(", ") //get the headers 

        //read each line after the headers and place them into the proper column
        for(var i=1;i<arrayLines.length;i++){

            var obj = {};
            var line=arrayLines[i].split(","); //get the individual parts of the line 
    
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = line[j]; //put each part in the right column
            }
    
            result.push(obj);
        }
    
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
    }

    var json_data = jsonConvert(data)
*/

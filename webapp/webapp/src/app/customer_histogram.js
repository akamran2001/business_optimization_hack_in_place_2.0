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
          { primary: new Date("2021-01-08 18:15:35"), secondary: 20 },
          { primary: new Date("2020-12-29 03:17:29"), secondary: 25 },
          { primary: new Date("2020-03-23 10:24:01"), secondary: 77 },
          { primary: new Date("2020-05-12 00:01:12"), secondary: 89 },
          { primary: new Date("2020-02-28 18:42:17"), secondary: 4 },
          { primary: new Date("2020-05-12 15:32:17"), secondary: 16 },
          { primary: new Date("2020-05-30 18:35:10"), secondary: 9 },
          { primary: new Date("2020-07-28 12:15:54"), secondary: 62 },
          { primary: new Date("2020-10-05 14:48:49"), secondary: 20 },
          { primary: new Date("2020-12-12 00:24:18"), secondary: 95 },
          { primary: new Date("2020-02-19 11:47:06"), secondary: 5 },
          { primary: new Date("2020-04-06 07:17:05"), secondary: 91 },
          { primary: new Date("2020-08-30 00:20:30"), secondary: 89 },
          { primary: new Date("2020-03-11 09:07:02"), secondary: 9 },
          { primary: new Date("2020-06-06 12:53:03"), secondary: 97 },
          { primary: new Date("2020-04-13 00:53:08"), secondary: 24 },
          { primary: new Date("2020-04-09 10:27:11"), secondary: 58 },
          { primary: new Date("2020-10-10 05:46:52"), secondary: 67 },
          { primary: new Date("2021-02-22 23:25:50"), secondary: 89 },
          { primary: new Date("2021-01-20 09:44:27"), secondary: 65 },
          { primary: new Date("2020-11-27 10:51:31"), secondary: 8 },
          { primary: new Date("2020-08-24 06:09:33"), secondary: 77 },
          { primary: new Date("2020-12-10 06:28:15"), secondary: 58 },
          { primary: new Date("2020-04-12 14:38:27"), secondary: 31 },
          { primary: new Date("2020-09-02 04:28:56"), secondary: 41 },
          { primary: new Date("2020-08-09 14:55:15"), secondary: 44 },
          { primary: new Date("2021-02-03 14:50:12"), secondary: 22 },
          { primary: new Date("2020-08-03 12:35:25"), secondary: 53 },
          { primary: new Date("2020-05-29 13:43:14"), secondary: 40 },
          { primary: new Date("2021-01-29 10:07:41"), secondary: 65 },
          { primary: new Date("2021-02-27 05:59:56"), secondary: 24 },
          { primary: new Date("2020-08-01 15:50:50"), secondary: 39 },
          { primary: new Date("2020-12-17 11:15:42"), secondary: 91 },
          { primary: new Date("2020-09-06 02:03:20"), secondary: 86 },
          { primary: new Date("2020-08-26 11:09:08"), secondary: 22 },
          { primary: new Date("2020-11-05 21:34:01"), secondary: 83 },
          { primary: new Date("2021-02-15 18:39:12"), secondary: 87 },
          { primary: new Date("2020-11-23 16:59:31"), secondary: 7 },
          { primary: new Date("2020-12-01 05:47:01"), secondary: 89 },
          { primary: new Date("2020-06-23 19:42:21"), secondary: 12 },
          { primary: new Date("2020-09-09 23:10:02"), secondary: 9 },
          { primary: new Date("2020-02-20 13:58:55"), secondary: 80 },
          { primary: new Date("2020-08-02 06:34:32"), secondary: 86 },
          { primary: new Date("2021-01-26 18:11:49"), secondary: 67 },
          { primary: new Date("2020-09-30 06:02:46"), secondary: 1 },
          { primary: new Date("2020-09-04 10:28:45"), secondary: 68 },
          { primary: new Date("2020-02-09 10:25:33"), secondary: 62 },
          { primary: new Date("2020-12-27 23:37:05"), secondary: 14 },
          { primary: new Date("2020-09-08 03:21:52"), secondary: 43 },
          { primary: new Date("2020-07-05 03:57:06"), secondary: 86 },
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

import React from "react"
import { Chart } from 'react-charts'
import fs from "fs"
import Data from "../data.json"

/* reading the mock data */


/*put the mock data into a chart*/ 
function CustHistogram(){

    /*Create time groups*/ 
    let timeGroups = [[0, 4], [4,8], [8,12], [12,16], [16,20], [20,24]]
    var d = {}
    timeGroups.forEach(timeGroup => {
        d[timeGroup] = 0
    });
    
    /*count the purchases by time*/
    Data.map((obj) => ( 
            (Object.keys(d)).forEach(key => {
                if((parseInt(obj.DateTime.substring(11, 13))) >= key[0] 
                && (parseInt(obj.DateTime.substring(11, 13))) < key[1]){
                    d[key]+=1
                }
            })
        )
    )
    
    /*put the data in coordinate point form*/ 
    var points = []
    for (var key in d){
        points.push([key, d[key]])
    }

    /*insert the data into the graph*/
    const data = React.useMemo(
        () => [
            {
                label: "customer frequency vs time period",
                data: points
            }
        ],
        []
    )
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    const barChart = (
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
    return barChart
}


export default CustHistogram

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
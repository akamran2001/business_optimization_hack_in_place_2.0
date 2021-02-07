import React from "react"
import { Chart } from 'react-charts'
import fs from "fs"
import data from "../MOCK_DATA.csv"

/*convert the mock data into */
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

/* reading the mock data */
console.log(json_data)

/*put the mock data into a chart*/ 
function custHistogram(){
}

export default jsonConvert
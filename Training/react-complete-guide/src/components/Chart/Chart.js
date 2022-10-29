import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) =>{
    const dataPointVaules = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximun = Math.max(...dataPointVaules);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint=>(
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximun} label={dataPoint.label}/>
            ))}
        </div>
    );
}

export default Chart;
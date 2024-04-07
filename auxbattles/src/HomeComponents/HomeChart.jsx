import React from "react";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

function HomeChart() {
  const textStyle = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    color: "white",
    borderRadius: "1px",
    fontSize: "2.2vw",
    fontFamily: "Courier New"
  };

  const data = {
    labels: ['Option 1', 'Option 2'],
    datasets: [{
      data: [300, 50],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
    }]
  };

  return (
    <div style={{height: "16rem"}}>
      <Pie data={data}/>
    </div>
  );
}

export default HomeChart;

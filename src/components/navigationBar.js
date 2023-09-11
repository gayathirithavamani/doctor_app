import React from "react";
import "./navigation.css";
import { Chart } from "react-google-charts";

const NavigationBar = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
    is3D: true,
  };
  return (
    <div>
      <div className="navbar">
        <div class="sidebar">
          <h2>Sidebar Title</h2>
        </div>
        ;
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      ;
    </div>
  );
};

export default NavigationBar;

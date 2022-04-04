import React, { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Nav from "../Nav/Nav";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return ( 
      <div>
          <Nav></Nav>
          <h2 className="text-center text-4xl uppercase font-semibold text-blue-600 mt-14">Our Monthly Sells</h2>
    <div className="md:flex pt-14 w-3/4 mx-auto" >
      <div className="">
        <h2 className="text-center text-blue-500 font-semibold mb-3 text-xl">Month wise sell</h2>
        <LineChart data={data} width={400} height={300}>
          <Line stroke="#8884d8" type="monotone" dataKey="sell"></Line>
          <XAxis dataKey="month" />
          <YAxis></YAxis>
          <Legend></Legend>
          
          <CartesianGrid strokeDasharray = "3 3"></CartesianGrid>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div className="ml-auto">
        <h2 className="text-center text-blue-500 font-semibold mb-3 text-xl">invesment vs Revenue</h2>
        <BarChart width ={400} height ={300} data={data}>
        <CartesianGrid strokeDasharray = "3 3"></CartesianGrid>
        <XAxis dataKey ="month"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey="revenue" stackId="a" fill="#8884d8" ></Bar>
        <Bar dataKey="investment" stackId="a" fill="#82ca9d"></Bar>
        </BarChart>
      </div>
    </div>
    </div>

  );
};

export default Dashboard;

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
    <div className="md:flex pt-20 w-11/12 mx-auto" >
      <div className="mr-20">
        <h2>Month wise sell</h2>
        <LineChart data={data} width={500} height={300}>
          <Line type="monotone" dataKey="sell"></Line>
          <XAxis dataKey="month" />
          <YAxis></YAxis>
          <Legend></Legend>
          <CartesianGrid strokeDasharray = "3 3"></CartesianGrid>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div className="">
        <h2>invesment vs Revenue</h2>
        <BarChart width ={500} height ={300} data={data}>
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

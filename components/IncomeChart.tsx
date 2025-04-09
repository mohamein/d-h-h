"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "./ui/button";

const allData = [
  { name: "Jan", sales: 5000, date: "2025-01-10" },
  { name: "Feb", sales: 7000, date: "2025-02-15" },
  { name: "Mar", sales: 6000, date: "2025-03-12" },
  { name: "Apr", sales: 4500, date: "2025-04-05" },
  { name: "May", sales: 8000, date: "2025-05-20" },
  { name: "Jun", sales: 6500, date: "2025-06-22" },
  { name: "Jul", sales: 9000, date: "2025-07-30" },
];

const IncomeChart = () => {
  const [filteredData, setFilteredData] = useState(allData);

  // Function to filter data
  const filterData = (range: any) => {
    const today = new Date();
    let startDate;

    if (range === "7d") {
      startDate = new Date(today.setDate(today.getDate() - 7));
    } else if (range === "1m") {
      startDate = new Date(today.setMonth(today.getMonth() - 1));
    } else if (range === "6m") {
      startDate = new Date(today.setMonth(today.getMonth() - 6));
    } else if (range === "1y") {
      startDate = new Date(today.setFullYear(today.getFullYear() - 1));
    } else {
      startDate = new Date("2020-01-01"); // Show all data
    }

    const newData = allData.filter((item) => new Date(item.date) >= startDate);
    setFilteredData(newData);
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-2 h-full">
      <div className="flex flex-col space-y-4 items-center">
        <h2 className="text-gray-700 text-base font-semibold text-center">
          Income Over Time
        </h2>
        <div className="flex items-center space-x-2 my-3">
          <Button
            className="bg-transparent border border-green-600 text-green-500 px-4 py-2 rounded-md"
            onClick={() => filterData("7d")}
          >
            Last 7 Days
          </Button>
          <Button
            className="bg-transparent border border-green-600 text-green-500 px-4 py-2 rounded-md"
            onClick={() => filterData("1m")}
          >
            1 Month
          </Button>
          <Button
            className="bg-transparent border border-green-600 text-green-500 px-4 py-2 rounded-md"
            onClick={() => filterData("6m")}
          >
            6 Months
          </Button>
          <Button
            className="bg-transparent border border-green-600 text-green-500 px-4 py-2 rounded-md"
            onClick={() => filterData("1y")}
          >
            1 Year
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#16A34A" animationDuration={800} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeChart;

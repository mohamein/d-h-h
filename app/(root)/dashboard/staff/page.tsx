import EmployeeTable from "@/components/tables/EmployeeTable";
import { Button } from "@/components/ui/button";
import React from "react";

const EmployeePage = () => {
  return (
    <div className="px-4 flex flex-col gap-4">
      <div className="flex w-full gap-4 items-center justify-between">
        <div className="w-full">
          <h2 className="text-xl text-gray-500 font-semibold">
            Liiska Shaqaale
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Add Employee
          </Button>
          <Button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            Export
          </Button>
        </div>
      </div>
      <div className="w-full bg-white shadow-md rounded-lg p-2 h-full">
        {/* <EmployeeTable /> */}
        <EmployeeTable />
      </div>
    </div>
  );
};

export default EmployeePage;

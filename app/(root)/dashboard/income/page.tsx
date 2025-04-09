import IncomeTable from "@/components/tables/IncomeTable";
import React from "react";

const IncomePage = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-gray-700 uppercase">Liiska Dakhliga.</h2>
        <IncomeTable />
      </div>
    </div>
  );
};

export default IncomePage;

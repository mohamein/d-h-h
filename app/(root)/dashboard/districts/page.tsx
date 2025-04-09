import DistrictTable from "@/components/tables/DistrictTable";
import React from "react";

const DistrictsPage = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-gray-700 text-xl uppercase">
          Liiska Degmooyinka oo dhan.
        </h2>
        <DistrictTable />
      </div>
    </div>
  );
};

export default DistrictsPage;

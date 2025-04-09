import Card from "@/components/Card";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import IncomeChart from "@/components/IncomeChart";
import { Button } from "@/components/ui/button";
import { PieChartComponent } from "@/components/PieChart";
const Dashboard = () => {
  return (
    <div className="px-4 flex flex-col space-y-4 items-start">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        <Card title="Total Income" total={10000} Icon={FaArrowTrendUp} />
        <Card title="Total Employee" total={300} Icon={IoPeople} />
        <Card title="Districts" total={17} Icon={IoMdHome} />
      </div>
      {/* Charts & Tables and other ui things */}

      <div className="flex flex-col w-full gap-4 items-start">
        <h2 className="text-xl text-gray-500 font-semibold">
          Your Income Report
        </h2>
        <div className="w-full flex items-center justify-between gap-4">
          <IncomeChart />
          <PieChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

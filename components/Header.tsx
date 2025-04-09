import React from "react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="bg-white h-[13vh] border-b border-b-gray-400 p-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-[300px]">
          <Input
            placeholder="Search Anything..."
            className="w-full border-green-600 placeholder:text-green-600 text-lg font-semibold"
          />
        </div>

        <div className="border-l border-l-gray-400 pl-5">
          <h2>John Doe</h2>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

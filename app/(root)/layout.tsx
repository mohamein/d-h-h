import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <div className="flex w-full flex-col gap-4">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default layout;

import React from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardMainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full">
      <DashboardHeader />
      <main className="p-6">
        {children}
      </main>
    </main>
  );
};

export default DashboardMainContent;

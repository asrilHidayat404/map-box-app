import DataTable from "@/components/DataTable";
import DashboardLayout from "@/layouts/DashboardLayout";
import prisma from "@/libs/db";
import React from "react";

const Dashboard = async () => {

  const dataMap = await prisma.coordinate.findMany()
  return (
    <DashboardLayout>
      <main>
        <h1 className="text-3xl pb-6">Dashboard</h1>
        {/* <div className="flex flex-wrap mt-6">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
            <p className="text-xl pb-3 flex items-center">
              <i className="fas fa-plus mr-3"></i> Monthly Reports
            </p>
            <div className="p-6 bg-white">
              <canvas id="chartOne" width="400" height="200"></canvas>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
            <p className="text-xl pb-3 flex items-center">
              <i className="fas fa-check mr-3"></i> Resolved Reports
            </p>
            <div className="p-6 bg-white">
              <canvas id="chartTwo" width="400" height="200"></canvas>
            </div>
          </div>
        </div> */}

        <div className="w-full mt-12">
          <div className="bg-white overflow-auto rounded-lg shadow-lg">
            {
              dataMap.length < 1 
              ? 
              <div className="text-black text-center p-5">Tidak ada data tersimpan</div> 
              :
             <DataTable dataMap={dataMap}/>
            }
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Dashboard;

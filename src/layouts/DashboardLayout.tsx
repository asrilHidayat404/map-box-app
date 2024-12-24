import React from "react"
import DashboardSidebar from "./DashboardSidebar"
import DashboardMainContent from "./DashboardMainContent"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex relative">
      <DashboardSidebar />
      <DashboardMainContent>
        {children}
      </DashboardMainContent>
    </main>
  )
}

export default DashboardLayout

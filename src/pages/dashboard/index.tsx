import DashboardUI from "@/components/dashboard/layout"
import GiddaaDashoardLayout from "@/components/dashboard/layout/GiddaaDashoardLayout"
import HeadTitle from "@/components/SharedComponents/Headertitle"
import React from "react"

const DashboardPage = () => {
  return (
    <GiddaaDashoardLayout>
      <HeadTitle title={"Dashboard"} />
      <DashboardUI />
    </GiddaaDashoardLayout>
  )
}

export default DashboardPage

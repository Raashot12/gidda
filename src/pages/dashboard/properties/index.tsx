import DashboardUI from "@/components/dashboard/layout"
import GiddaaDashoardLayout from "@/components/dashboard/layout/GiddaaDashoardLayout"
import HeadTitle from "@/components/SharedComponents/Headertitle"
import React from "react"

const PropertiesPage = () => {
  return (
    <div>
      <GiddaaDashoardLayout>
        <HeadTitle title={"Dashboard"} />
        <DashboardUI />
      </GiddaaDashoardLayout>
    </div>
  )
}

export default PropertiesPage

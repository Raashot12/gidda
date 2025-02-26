import HeadTitle from "@/components/SharedComponents/Headertitle"
import React, {  ReactNode } from "react"
import FooterSection from "../../Footer"
import NavigationHeader from "../../Header"

const MainLayoutWrapper = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <HeadTitle title={"Shortlets"} />
      <NavigationHeader />
      <React.Fragment>{children}</React.Fragment>
      <FooterSection />
    </div>
  )
}

export default MainLayoutWrapper

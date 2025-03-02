import React, { ReactNode, useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

type GiddaaDashoardProps = {
  children: ReactNode
}
const GiddaaDashoardLayout = ({children}: GiddaaDashoardProps) => {
  const [isOpened, setOpened] = useState(false)
  const [mobileShow, setMobile] = useState(false)

  const toggleDrawer = () => {
    setOpened(prev => !prev)
  }

  const toggleMobile = () => {
    setMobile(prev => !prev)
  }
  return (
    <div className="text-center flex flex-col min-h-screen overflow-y-hidden">
      <div className="flex">
        <Sidebar
          isOpened={isOpened}
          handleToggle={toggleDrawer}
          mobileShow={mobileShow}
          toggleMobile={toggleMobile}
        />
        <Header toggleMobile={toggleMobile} isOpened={isOpened} />
        <div
          className={`flex-1 w-full text-left h-screen relative overflow-x-hidden ${
            isOpened ? "ml-0 md:ml-[90px]" : "ml-0 xl:ml-[233px]"
          }`}
        >
          {/* Page container with responsive padding */}
          <div className="flex-1 pl-[25px] pr-[25px] md:pl-8 md:pr-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiddaaDashoardLayout

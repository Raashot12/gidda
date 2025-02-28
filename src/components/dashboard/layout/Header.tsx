import React from "react"
import IconArrowDown from "@/components/IconComponents/IconArrowDown"
import IconForwardArrow from "@/components/IconComponents/IconForwardArrow"
import localFont from "next/font/local"
import IconGreenHouse from "@/components/IconComponents/IconGreenHouse"
import IconSingleRoom from "@/components/IconComponents/IconSingleRoom"
import TextInput from "@/components/SharedComponents/Input"
import IconSearchForDashboard from "@/components/IconComponents/IconSearchForDashboard"
import IconBell from "@/components/IconComponents/IconBell"
import IconClock from "@/components/IconComponents/IconClock"
import IconShare from "@/components/IconComponents/IconShare"
import CustomMenu from "@/components/SharedComponents/CustomMenu"
import IconSystem from "@/components/IconComponents/IconSystem"
import IconGuide from "@/components/IconComponents/IconGuide"
import IconVideo from "@/components/IconComponents/IconVideo"
import IconBackArrow from "@/components/IconComponents/IconBackArrow"

const milliRegular = localFont({
  src: "../../fonts/millik-regular/millik-Regular.otf",
  weight: "400",
  style: "normal",
})
export default function Header({
  isOpened,
}: {
  toggleMobile?: () => void
  isOpened: boolean
}) {
 const desktopClasses = isOpened
   ? "ml-0 md:w-[calc(100vw-233px)] md:duration-500"
   : "ml-0 md:w-[calc(100vw-233px)] md:duration-500"
  return (
    <header
      className={`fixed top-0 ml-[2450px] right-0 w-full h-[112px] flex-shrink-0 ${desktopClasses} flex py-[30px] justify-between px-[25px] md:px-[38px] border-b border-[#F0F0F0] bg-white z-50`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 flex-col">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <IconBackArrow />
              <IconForwardArrow />
            </div>
            <p
              className={`font-[40] ${milliRegular.className} text-[16px] leading-[26px]`}
            >
              My Properties
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <IconGreenHouse />
              <span className="text-[10px] font-[400] text-black">
                5 Estates
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IconSingleRoom />
              <span className="text-[10px] font-[400] text-black">
                15 houses
              </span>
              <span className="w-[4px] h-[4px] bg-[#979797] rounded-[50%]"></span>
              <span className="text-[10px] font-[400] text-black">7 units</span>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[374px]">
          <span className="absolute left-4 top-[10px] text-gray-400">
            <IconSearchForDashboard size={10} />
          </span>
          <TextInput type="text" placeholder="Search for anything" />
        </div>
        <CustomMenu>
          <CustomMenu.Target>
            <div className="flex justify-center">
              <button className="bg-[#F0F0F0] text-[#335F32] px-3 py-3 rounded-full flex items-center gap-2 text-[11px] font-[700] hover:bg-[#F0F0F0] transition">
                <span className="animate-bounce">
                  <IconSystem />
                </span>
                Explore Our Products{" "}
                <span>
                  <IconArrowDown fill="#335F32" />
                </span>
              </button>
            </div>
          </CustomMenu.Target>
          <CustomMenu.Dropdown>
            <CustomMenu.Item leftIcon={<IconGuide />}>
              <p className="font-[500] text-[12px] text-black">
                Product Tour & Guide
              </p>
            </CustomMenu.Item>
            <CustomMenu.Item leftIcon={<IconVideo />}>
              <p className="font-[500] text-[12px] text-black">
                Video Tutorial
              </p>
            </CustomMenu.Item>
          </CustomMenu.Dropdown>
        </CustomMenu>
        <div className="space-x-4 flex items-center cursor-pointer">
          <IconBell />
          <IconClock />
          <IconShare />
        </div>
      </div>
    </header>
  )
}

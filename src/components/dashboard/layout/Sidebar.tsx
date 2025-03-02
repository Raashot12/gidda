import React, {useState} from "react"
import {useRouter} from "next/router"
import GiddaaLogo from "@/components/IconComponents/GiddaaLogo"
import IconDashboard from "@/components/IconComponents/IconDashboard"
import IconFlowerHouse from "@/components/IconComponents/IconFlowerHouse"
import CustomMenu from "@/components/SharedComponents/CustomMenu"
import IconChangePassword from "@/components/IconComponents/IconChangePassword"
import IconProfile from "@/components/IconComponents/IconProfile"
import IconVerticalDots from "@/components/IconComponents/IconVerticalDots"
import IconLogout from "@/components/IconComponents/IconLogout"
import Cookies from "js-cookie"

type SidebarProps = {
  isOpened: boolean
  handleToggle: () => void
  toggleMobile: () => void
  mobileShow: boolean
}

const Sidebar = ({}: SidebarProps) => {
  const [, setItemHovered] = useState<string | null>(null)
  const router = useRouter()
  const handleMouseHover = (param: string | null) => setItemHovered(param)
  const handleMouseOut = () => setItemHovered(null)

  const sidebarClasses = `w-0 pl-0 duration-200 duration-200 xl:w-[233px] xl:pt-[29px] duration-200 bg-primaryGreen fixed z-[999] flex flex-col h-screen overflow-hidden text-left flex-shrink-0 min-h-0 pb-[20px]  transition-all`

  return (
    <aside className={sidebarClasses}>
      <div
        className={`hidden md:block md:pl-[30px] flex-shrink-0 border-b-2 pb-4 border-[#979797]`}
      >
        <GiddaaLogo fill="#FFFFFF" />
        <p className="text-white mt-3 text-[9px] font-[600]">
          {" "}
          Residencia Moderno Smart...
        </p>
      </div>
      <div className="mt-[43px] md:pl-[30px] md:pr-[30px] flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        <div className="space-y-[18px] mt-[16px] text-[#0A0A0A]">
          <div
            className={`flex items-center ${
              router.pathname === "/dashboard"
                ? "bg-white px-3 py-2"
                : "bg-transparent"
            }  cursor-pointer space-x-3 rounded-[100px] hover:text-[#335F32] hover:font-[700]`}
            onMouseOver={() => handleMouseHover("Dashboard")}
            onMouseOut={handleMouseOut}
            onClick={() => router.push("/dashboard")}
          >
            <IconDashboard active={router.pathname === "/dashboard"} />
            <span
              className={`${
                router.pathname === "/dashboard"
                  ? "text-[#335F32] font-[700]"
                  : "text-[#FFFFFF] font-[700]"
              }`}
            >
              Dashboard
            </span>
          </div>
          <div
            className={`flex items-center ${
              router.pathname === "/dashboard/properties"
                ? "bg-white px-3 py-2"
                : "bg-transparent"
            }  cursor-pointer space-x-3 rounded-[100px] hover:text-[#335F32] hover:font-[700]`}
            onMouseOver={() => handleMouseHover("Properties")}
            onMouseOut={handleMouseOut}
            onClick={() => router.push("/dashboard/properties")}
          >
            <IconFlowerHouse
              active={router.pathname === "/dashboard/properties"}
            />
            <span
              className={`${
                router.pathname === "/dashboard/properties"
                  ? "text-[#335F32] font-[700]"
                  : "text-[#FFFFFF] font-[700]"
              }`}
            >
              Properties
            </span>
          </div>
        </div>
      </div>

      <div className="md:pl-[30px] md:pr-[20px]">
        <CustomMenu>
          <CustomMenu.Target>
            <div className="flex justify-center">
              <button className="bg-[#F0F0F0] text-[#335F32] border border-[#D9D9D9] px-1 py-2 rounded-full flex items-center gap-3 text-[11px] font-[700] hover:bg-[#F0F0F0] transition">
                <span className="bg-[#335F32] flex items-center justify-center w-[29px] h-[29px] rounded-[50%] text-white text-[13px] font-[700]">
                  N
                </span>
                <div className="flex flex-col gap-1 text-[#000000]">
                  <p>James Mensah Iskilu</p>
                  <p className="font-[600] text-[9px] text-[#667085]">
                    Jamesmensah@gmail.com
                  </p>
                </div>
                <span>
                  <IconVerticalDots />
                </span>
              </button>
            </div>
          </CustomMenu.Target>
          <CustomMenu.Dropdown direction="up">
            <CustomMenu.Item leftIcon={<IconProfile />}>
              <p className="font-[400] ml-2 text-[11px] text-[#4B4B4B]">
                My Profile
              </p>
            </CustomMenu.Item>
            <CustomMenu.Item leftIcon={<IconChangePassword />}>
              <p className="font-[400]  ml-2 text-[11px] text-[#4B4B4B]">
                Change Password
              </p>
            </CustomMenu.Item>
            <div className="h-[1px] mt-2 bg-[#F0F0F0]"></div>
            <CustomMenu.Item
              onClick={() => {
                router.push("/")
                Cookies.remove("token")
              }}
              leftIcon={
                <div className="animate-swayout">
                  <IconLogout />
                </div>
              }
            >
              <p className="font-[700]  ml-2 text-[11px] text-[#E40000]">
                Logout
              </p>
            </CustomMenu.Item>
          </CustomMenu.Dropdown>
        </CustomMenu>
      </div>
    </aside>
  )
}

export default Sidebar

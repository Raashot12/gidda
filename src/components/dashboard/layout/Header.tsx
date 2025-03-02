import React, {useState} from "react"
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
import IconMenu from "@/components/IconComponents/IconMenu"
import GiddaaLogo from "@/components/IconComponents/GiddaaLogo"
import IconFlowerHouse from "@/components/IconComponents/IconFlowerHouse"
import IconDashboard from "@/components/IconComponents/IconDashboard"
import {useRouter} from "next/router"
import IconLogout from "@/components/IconComponents/IconLogout"
import IconChangePassword from "@/components/IconComponents/IconChangePassword"
import IconVerticalDots from "@/components/IconComponents/IconVerticalDots"
import IconProfile from "@/components/IconComponents/IconProfile"
import {useDispatch} from "react-redux"
import {setUserSearchData} from "@/redux/features/useSearchSlice"

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
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    dispatch(setUserSearchData({search: e.target.value}))
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [, setItemHovered] = useState<string | null>(null)
  const router = useRouter()

  const handleMouseHover = (param: string | null) => setItemHovered(param)
  const handleMouseOut = () => setItemHovered(null)

  const desktopClasses = isOpened
    ? "ml-0 md:w-[calc(100vw-233px)] md:duration-500"
    : "ml-0 w-full xl:w-[calc(100vw-233px)] md:duration-500"
  return (
    <>
      <header
        className={`fixed top-0 ml-[2450px]  right-0 w-full h-[112px] flex-shrink-0 ${desktopClasses} flex py-[30px] justify-between px-[25px] md:px-[38px] border-b border-[#F0F0F0] bg-white z-50`}
      >
        <div className="hidden xl:flex items-center justify-between w-full">
          <div className="hidden xl:flex gap-3 flex-col">
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
                <span className="text-[10px] font-[400] text-black">
                  7 units
                </span>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex relative w-full max-w-[374px]">
            <span className="absolute left-4 top-[10px] text-gray-400">
              <IconSearchForDashboard size={20} />
            </span>
            <TextInput
              type="text"
              placeholder="Search for anything"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <CustomMenu>
            <CustomMenu.Target>
              <div className="hidden xl:flex justify-center">
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
          <div className="hidden xl:flex space-x-4 items-center cursor-pointer">
            <IconBell />
            <IconClock />
            <IconShare />
          </div>
        </div>
        <div className="xl:hidden flex items-center justify-between w-full">
          <div className={`xl:hidden flex-shrink-0 border-b-2`}>
            <GiddaaLogo fill="#335F32" />
            <p className="text-[#335F32] mt-1 text-[9px] font-[600]">
              {" "}
              Residencia Moderno Smart...
            </p>
          </div>
          {/* Mobile Menu Icon */}
          <div className="xl:hidden">
            <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <IconMenu />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 xl:hidden bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-out ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed w-[90%] h-[100%] top-[96px] xl:hidden left-0 right-0 bg-purple-50 z-50 transition-transform duration-300 ease-out transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          <div className="flex px-4 items-start space-y-9 mt-10 flex-col justify-between w-full">
            {/* Scrollable content container */}
            <div className="mt-[23px] md:pl-[30px] md:pr-[30px] flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
              <div className="space-y-[18px] mt-[16px] text-[#0A0A0A]">
                <div
                  className={`flex items-center ${
                    router.pathname === "/dashboard"
                      ? "border-[#335F32] border-2 px-3 py-2"
                      : "bg-transparent"
                  }  cursor-pointer space-x-3 rounded-[100px] hover:text-[#335F32] hover:font-[700]`}
                  onMouseOver={() => handleMouseHover("Dashboard")}
                  onMouseOut={handleMouseOut}
                  onClick={() => router.push("/dashboard")}
                >
                  <IconDashboard active={router.pathname === "/dashboard"} />
                  <span className="text-[#335F32] text-[14px] font-[800]">
                    Dashboard
                  </span>
                </div>
                <div
                  className={`flex items-center ${
                    router.pathname === "/dashboard/properties"
                      ? "border-[#335F32] border-2 px-3 py-2"
                      : "bg-transparent"
                  }  cursor-pointer space-x-3 rounded-[100px] hover:text-[#335F32] hover:font-[700]`}
                  onMouseOver={() => handleMouseHover("Properties")}
                  onMouseOut={handleMouseOut}
                  onClick={() => router.push("/dashboard/properties")}
                >
                  <IconFlowerHouse
                    active={router.pathname === "/dashboard/properties"}
                  />
                  <span className="text-[#335F32] text-[14px] font-[700]">
                    Properties
                  </span>
                </div>
              </div>
            </div>
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
                  <span className="text-[10px] font-[400] text-black">
                    7 units
                  </span>
                </div>
              </div>
            </div>
            <div className="flex relative w-full max-w-[374px]">
              <span className="absolute left-4 top-[10px] text-gray-400">
                <IconSearchForDashboard size={20} />
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
            <div className="flex space-x-4 items-center cursor-pointer">
              <IconBell />
              <IconClock />
              <IconShare />
            </div>
            <CustomMenu>
              <CustomMenu.Target>
                <div className="flex items-start justify-center">
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
        </div>
      </div>
    </>
  )
}

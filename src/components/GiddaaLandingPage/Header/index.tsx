import GiddaaLogo from "@/components/IconComponents/GiddaaLogo"
import IconArrowDown from "@/components/IconComponents/IconArrowDown"
import IconSearch from "@/components/IconComponents/IconSearch"
import IconUSA from "@/components/IconComponents/IconUSA"
import profileImage from "../../Images/profileImage.png"
import {useRouter} from "next/router"
import React, {useState} from "react"
import Image from "next/image"
import TextInput from "@/components/SharedComponents/Input"
import IconMenu from "@/components/IconComponents/IconMenu"
import MenuItems from "./MenuItems"

const NavigationHeader = () => {
  const {push} = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <div className="bg-navbg border-b fixed top-0 left-0 w-full border-[#D9D9D9] p-6 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-2 cursor-pointer" onClick={() => push("/")}>
              <GiddaaLogo />
            </div>
            {/* Center Section: Search + Nav Links */}
            <div className="hidden xl:block">
              <div className="ml-4 flex flex-nowrap shrink-0 items-center space-x-4">
                {/* Search Bar */}
                <div className="relative w-full max-w-[189px]">
                  <span className="absolute left-4 top-[14px] text-gray-400">
                    <IconSearch />
                  </span>
                  <TextInput type="text" placeholder="Search for anything" />
                </div>

                {/* Main Nav Links */}
                <div className="hidden items-center space-x-6 md:flex">
                  <MenuItems />
                </div>
                <div className="flex items-center space-x-6">
                  <button className="border-x border-[#D9D9D9] font-[700] text-[12px] leading-[22px] px-5 py-1 text-primaryGreen hover:bg-gray-100">
                    Refer & Earn
                  </button>

                  {/* Language Selector */}
                  <div className="relative">
                    <button className="flex border-[#D9D9D9] border p-2 rounded-full items-center space-x-2">
                      <IconUSA />
                      <span className="font-[700] text-[12px]">USD</span>
                      <IconArrowDown fill="#4B4B4B" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src={profileImage} alt="profile Image of user" />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Menu Icon */}
            <div className="xl:hidden">
              <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <IconMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 xl:hidden bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-out ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />
      <div
        className={`fixed w-[90%] h-[100%] top-[96px] xl:hidden left-0 right-0 bg-white z-50 transition-transform duration-300 ease-out transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        <div className="container px-6 py-4 flex flex-col items-start space-y-6">
          <MenuItems setIsDrawerOpen={setIsDrawerOpen} />
          <div className="flex items-center space-x-6">
            <button className="border-x border-[#D9D9D9] font-[700] text-[12px] leading-[22px] px-5 py-1 text-primaryGreen hover:bg-gray-100">
              Refer & Earn
            </button>
            <div className="relative">
              <button className="flex border-[#D9D9D9] border p-2 rounded-full items-center space-x-2">
                <IconUSA />
                <span className="font-[700] text-[12px]">USD</span>
                <IconArrowDown fill="#4B4B4B" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={profileImage} alt="profile Image of user" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationHeader

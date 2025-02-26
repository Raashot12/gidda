import {navMenu} from "@/components/constant"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const MenuItems = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const {pathname} = useRouter()
  return (
    <>
      {navMenu.map(value => (
        <React.Fragment key={value.id}>
          <div className="flex items-center cursor-pointer shrink-0 whitespace-nowrap space-x-1">
            <Link
              href={value.route}
              onClick={() => setIsDrawerOpen?.(false)}
              style={{lineHeight: "22px", fontSize: 12}}
              className={`relative ${
                pathname === "/" && value.route === "/"
                  ? "active font-[700] text-primaryGreen after:content-[''] after:block after:w-full after:h-[4px] after:bg-primaryGreen after:transition-transform after:duration-300 after:scale-x-100"
                  : pathname.includes(value.route) && value.route !== "/"
                  ? "active after:content-[''] after:block after:w-full after:h-[4px] after:bg-primaryGreen after:transition-transform after:duration-300 hover:after:scale-x-100"
                  : "not-active"
              } text-[#4B4B4B] after:content-[''] after:block after:w-full after:h-[4px] after:rounded-full after:bg-primaryGreen after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              {value.pathName}
            </Link>
            {value.icon}
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

export default MenuItems

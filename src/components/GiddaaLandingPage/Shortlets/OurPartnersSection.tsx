import { partners } from "@/components/constant"
import IconArrowPointer from "@/components/IconComponents/IconArrowPointer"
import CategoryTabs from "@/components/SharedComponents/CategoryTab"
import Title from "@/components/SharedComponents/Title"
import React from "react"

const OurPartnersSection = () => {
  const filledArray = new Array(9).fill(8)
  return (
    <div className="container mx-auto">
      <div className="py-[48px] md:py-[74px]">
        <Title
          title="Our Partners"
          subTitle="Organizations we’ve partnered with to make real estate in Nigeria a pleasant experience for all."
        />
        <div className="mx-auto flex justify-center items-center mt-10 mb-12">
          <CategoryTabs data={partners} />
        </div>
        <div className="overflow-x-auto w-full scrollbar-hidden">
          <div className="flex justify-between gap-7 z-10 w-full">
            {filledArray.map((_, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#D9D9D9] w-[106px] h-[107px] rounded-full shrink-0  z-10 cursor-pointer"
                ></div>
              )
            })}
          </div>
        </div>
        <p className="font-[700] text-[40px] text-center text-[#E4E4E4] mt-8">
          Over 50 Partners
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-[#1C501E] text-white px-6 py-3 rounded-full flex items-center gap-2 text-[13px] font-[700] shadow-md hover:bg-[#174319] transition">
            View All Partners
            <span className="bounceArrowX">
              <IconArrowPointer />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurPartnersSection

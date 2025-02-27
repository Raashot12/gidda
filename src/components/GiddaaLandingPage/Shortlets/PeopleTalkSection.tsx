import {whyGidda} from "@/components/constant"
import CategoryTabs from "@/components/SharedComponents/CategoryTab"
import Image from "next/image"
import chimalarge from "../../Images/chimalarge.jpeg"
import chimaprofile from "../../Images/chimaprofile.jpg"
import Title from "@/components/SharedComponents/Title"
import React, {useState} from "react"
import IconPlay from "@/components/IconComponents/IconPlay"
import Steppers from "@/components/SharedComponents/Steppers"

const PeopleTalkSection = () => {
  const [getPercentage, setGetPercentage] = useState(30)
  return (
    <div className="container mx-auto py-[40px] px-6 md:py-[64px] z-100">
      <Title
        title="People Talk"
        subTitle="What our customers and partners think about us."
      />
      <div className="mx-auto flex justify-center items-center mt-10 mb-12">
        <CategoryTabs data={whyGidda} setGetPercentage={setGetPercentage} />
      </div>
      <div className="flex align-baseline flex-col xl:flex-row  justify-start mt-5 gap-6 md:gap-[56px]">
        <div className="flex lg:flex-row flex-col lg:h-[590px] items-center sm:items-start border-2 border-primaryGreen rounded-[40px] shadow-lg overflow-hidden bg-gradient">
          <div className={`lg:w-1/2 w-full pb-6 pt-6 px-6`}>
            <Image
              src={chimaprofile.src}
              width={226}
              height={215}
              alt={"title"}
            />

            <h3 className="text-[24px] font-[700] text-[#000000]  mt-6">
              Chima Okereke
            </h3>
            <p className="text-primaryGreen leading-[13px] font-[700] text-[12px] mt-5">
              DIRECTOR OF SALES AT BILAAD REALTY
            </p>
            <p className="text-[#000000] leading-[26px] font-[400] text-[16px] mt-5 pr-6">
              &quot;I had an outstanding experience with the short-let booking
              service! From start to finish, the team made the entire process
              smooth and easy. I needed help finding the perfect place for my
              stay, and they went above and beyond to locate a property that fit
              all my requirements. Once I confirmed and made the payment, they
              handled the reservation with great efficiency.{" "}
            </p>
          </div>

          <div
            className="lg:w-1/2 w-full h-[480px] flex items-center justify-center lg:h-[590px] bg-cover"
            style={{
              backgroundImage: `url(${chimalarge.src})`,
              backgroundPosition: "30% 70%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="cursor-pointer">
              <IconPlay />
            </div>
          </div>
        </div>
        <div className="xl:block mt-5 lg:mt-0  xl:h-[575px]">
          <Steppers percent={getPercentage} />
        </div>
      </div>
    </div>
  )
}

export default PeopleTalkSection

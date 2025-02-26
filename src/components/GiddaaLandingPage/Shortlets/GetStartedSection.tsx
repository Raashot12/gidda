import {getStartedData} from "@/components/constant"
import IconBorderVariantThree from "@/components/IconComponents/IconBorderVariantThree"
import Card from "@/components/SharedComponents/Card"
import Title from "@/components/SharedComponents/Title"
import React from "react"

const GetStartedSection = () => {
  return (
    <div className="relative my-[64px]">
      <div className="absolute w-full">
        <IconBorderVariantThree />
      </div>
      <div className="relative z-10 rounded-[100%] px-6 py-6">
        <div className="container  mt-6 md:mt-14 mx-auto">
          <Title
            title="Get Started"
            subTitle="Made it this far? What are you waiting for? Get started with one of our products today!."
          />
          <div className="grid md:px-[45] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {getStartedData.map(card => (
              <Card key={card.id} {...card} isGetStarted={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedSection

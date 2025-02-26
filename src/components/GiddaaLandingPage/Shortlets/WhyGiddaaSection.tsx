import {whyGidda, whyGiddaaData} from "@/components/constant"
import IconBorderVariantTwo from "@/components/IconComponents/IconBorderVariantTwo"
import AOSInit from "@/components/SharedComponents/AOSInit"
import Card from "@/components/SharedComponents/Card"
import CategoryTabs from "@/components/SharedComponents/CategoryTab"
import Title from "@/components/SharedComponents/Title"
import React from "react"

const WhyGiddaaSection = () => {
  AOSInit({
    disable: false,
  })
  return (
    <div className="relative my-[64px]">
      <div className="absolute w-full">
        <IconBorderVariantTwo />
      </div>
      <div className="relative z-10 rounded-[100%] px-6 py-6">
        <div className="container  mt-6 md:mt-14 mx-auto">
          <Title
            title="Why Giddaa?"
            subTitle="Reasons why you should embark on your real estate journey with us, and our products."
          />
          <div className="mx-auto flex justify-center items-center mt-10 mb-12">
            <CategoryTabs data={whyGidda} />
          </div>
          <div className="flex justify-center flex-wrap gap-6 mt-10">
            {whyGiddaaData.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyGiddaaSection

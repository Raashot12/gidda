import CardVariantOne from "@/components/SharedComponents/CardVariantOne"
import React from "react"
import Title from "@/components/SharedComponents/Title"
import CardVariantTwo from "@/components/SharedComponents/CardVariantTwo"
import { cards, SVGborder } from "@/components/constant"





const ProductsSection = () => {
  return (
    <div className="relative my-[64px]">
      <SVGborder />
      <div className="relative z-10 rounded-[100%] px-6 py-6">
        <div className="container  mt-6 md:mt-14 mx-auto">
          <Title
            title="Products"
            subTitle="Get started with one of our carefully crafted products & services."
          />

          <div className="grid grid-cols-1 mt-8 md:mt-12 xl:px-6 xl:grid-cols-2 gap-8">
            {cards.slice(0, 2).map((card, index) => (
              <CardVariantOne key={index} index={index} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-1 mt-8 md:mt-12 xl:px-6 xl:grid-cols-2 gap-8">
            {cards.slice(2, 4).map((card, index) => (
              <CardVariantTwo key={index} index={index} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-1 mt-8 md:mt-12 xl:px-6 xl:grid-cols-2 gap-8">
            {cards.slice(4, 6).map((card, index) => (
              <CardVariantOne key={index} index={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsSection

import IconBorder from "@/components/IconComponents/IconBorder"
import CardVariantOne from "@/components/SharedComponents/CardVariantOne"
import couple from "../../Images/couple.jpg"
import television from "../../Images/television.jpeg"
import road from "../../Images/road.jpeg"
import agent from "../../Images/agent.png"
import tree from "../../Images/tree.jpeg"
import office from "../../Images/office.jpeg"
import React from "react"
import Title from "@/components/SharedComponents/Title"
import CardVariantTwo from "@/components/SharedComponents/CardVariantTwo"



const SVGborder = () => {
  return (
    <div className="absolute w-full">
      <IconBorder />
    </div>
  )
}
const cards = [
  {
    title: "Buy",
    description:
      "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
    button1: {text: "Find a Home to Buy", link: "#"},
    image: couple,
  },
  {
    title: "Short Lets",
    description:
      "Find your next getaway spot, staycation, or business trip spot. Avoid extra charges, find detailed information, and reserve a short let.",
    button1: {text: "Reserve a Short Let", link: "#"},
    image: television,
  },
  {
    title: "Invest",
    description:
      "Become a real estate investor without breaking the bank. Invest in real estate assets and grow your portfolio with friends and family (in a private investment group) or with the public (fractionally, like a stock exchange).",
    button1: {text: "Find an Investment", link: "#"},
    button2: {text: "Learn More", link: "#"},
    image: road,
  },
  {
    title: "Sell",
    description:
      "Sell your property with us, a company and partner you can trust. Our simple process makes it easy for sellers to list their properties and sell their properties on various purchase plans to the 1000’s of potential buyers who visit Giddaa monthly.",
    button1: {text: "Sell Your Property", link: "#"},
    button2: {text: "Talk To Our Team", link: "#"},
    image: tree,
  },
  {
    title: "Services",
    description:
      "Explore and purchase homes from top developers & vetted property sellers (With land titles) on various purchase plans.",
    button1: {text: "Find a Home to Buy", link: "#"},
    image: agent,
  },
  {
    title: "Enterprise",
    description:
      "We’ve built solutions & tools for property developers, and property managers specifically operating in the Nigerian Market - Our solutions fit like a glove.",
    button1: {text: "Learn More", link: "#"},
    image: office,
  },
]

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

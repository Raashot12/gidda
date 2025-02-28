import {FieldType} from "@/types"
import IconArrowDown from "../IconComponents/IconArrowDown"
import IconBed from "../IconComponents/IconBed"
import IconCubes from "../IconComponents/IconCubes"
import IconFacebook from "../IconComponents/IconFacebook"
import IconHouse from "../IconComponents/IconHouse"
import IconInstagram from "../IconComponents/IconInstagram"
import IconMansion from "../IconComponents/IconMansion"
import IconMeal from "../IconComponents/IconMeal"
import IconSell from "../IconComponents/IconSell"
import IconTelevision from "../IconComponents/IconTelevision"
import IconTiktok from "../IconComponents/IconTiktok"
import {MdOutlineAlternateEmail} from "react-icons/md"
import {IoKeySharp} from "react-icons/io5"
import IconTwitter from "../IconComponents/IconTwitter"
import IconBorder from "../IconComponents/IconBorder"
import couple from "../../components/Images/couple.jpg"
import television from "../../components/Images/television.jpeg"
import road from "../../components/Images/road.jpeg"
import agent from "../../components/Images/agent.png"
import tree from "../../components/Images/tree.jpeg"
import estate from "../../components/Images/estate.jpeg"
import office from "../../components/Images/office.jpeg"

export const navMenu = [
  {
    pathName: "Buy",
    route: "#",
    id: 1,
    icon: <IconArrowDown fill="#335F32" />,
  },
  {
    pathName: "Shortlets",
    route: "/",
    id: 2,
    icon: <IconArrowDown fill="#335F32" />,
  },

  {
    pathName: "Sell",
    route: "#",
    id: 3,
    icon: <IconArrowDown fill="#335F32" />,
  },
  {
    pathName: "Invest",
    route: "#",
    icon: <IconArrowDown fill="#335F32" />,
    id: 4,
  },
  {
    pathName: "Services",
    route: "#",
    icon: <IconArrowDown fill="#335F32" />,
    id: 5,
  },
  {
    pathName: "Enterprise",
    route: "#",
    icon: <IconArrowDown fill="#335F32" />,
    id: 8,
  },
  {
    pathName: "Agents & Realtors",
    route: "#",
    id: 146,
  },
]

export const partners = [
  {
    id: 1,
    title: "GOVERNMENT",
  },
  {
    id: 2,
    title: "PROPERTY DEVELOPERS",
  },
  {
    id: 3,
    title: "PROPERTY MANAGERS",
  },
  {
    id: 4,
    title: "FINANCIAL INSTITUTIONS",
  },
  {
    id: 5,
    title: "NON-GOVERNMENTAL ORGANIZATIONS",
  },
]
export const whyGidda = [
  {
    id: 1,
    title: "BUY",
    percent: 30,
  },
  {
    id: 2,
    title: "SHORT LETS",
    percent: 45,
  },
  {
    id: 3,
    title: "INVEST",
    percent: 65,
  },
  {
    id: 4,
    title: "SELL",
    percent: 75,
  },
  {
    id: 5,
    title: "SERVICES",
    percent: 85,
  },
  {
    id: 6,
    title: "ENTERPRISE",
    percent: 100,
  },
]

export const whyGiddaaData = [
  {
    id: 1,
    title: "Stay Fully Booked",
    subtitle: "Order from our vendors and restaurant up till 12am",
    icon: <IconMeal />,
  },
  {
    id: 2,
    title: "Stay Fully Booked",
    subtitle: "Order from our vendors and restaurant up till 12am",
    icon: <IconMeal />,
  },
  {
    id: 3,
    title: "Stay Fully Booked",
    subtitle: "Order from our vendors and restaurant up till 12am",
    icon: <IconMeal />,
  },
]

export const getStartedData = [
  {
    id: 1,
    title: "Buy",
    subtitle:
      "Find homes on various purchase plans; apply to buy them with your account executive.",
    icon: <IconHouse />,
  },
  {
    id: 2,
    title: "Short Lets",
    subtitle:
      "Explore high quality short lets, with no booking fees and excellent support.",
    icon: <IconBed />,
  },
  {
    id: 3,
    title: "Invest",
    subtitle:
      "Explore high quality short lets, with no booking fees and reserve them",
    icon: <IconMansion />,
  },
  {
    id: 4,
    title: "Sell",
    subtitle:
      "Explore high quality short lets, with no booking fees and reserve them",
    icon: <IconSell />,
  },
  {
    id: 5,
    title: "Services",
    subtitle:
      "Explore high quality short lets, with no booking fees and reserve them",
    icon: <IconCubes />,
  },
  {
    id: 6,
    title: "Enterprise",
    subtitle:
      "Explore high quality short lets, with no booking fees and reserve them",
    icon: <IconTelevision />,
  },
]

export const SOCIALS = [
  {id: 1, icon: <IconInstagram />},
  {id: 2, icon: <IconTiktok />},
  {id: 3, icon: <IconFacebook />},
  {id: 4, icon: <IconTwitter />},
]

export const loginField: FieldType[] = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Your Email",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Your Password",
    icon: <IoKeySharp />,
  },
]
export const SVGborder = () => {
  return (
    <div className="absolute w-full">
      <IconBorder />
    </div>
  )
}
export const cards = [
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

export const properties = [
  {
    id: 201,
    tag: "12 Houses",
    title: "Sunrise Estate",
    description: "No 4 Palm Road, Wuse II, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 202,
    tag: "16 Houses",
    title: "Paradise Estate",
    description:
      "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 203,
    tag: "10 Houses",
    title: "Emerald Estate",
    description: "No 2 Rose Avenue, Garki, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 204,
    tag: "20 Houses",
    title: "Bloomfield Estate",
    description: "No 7 Olive Street, Maitama, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 205,
    tag: "8 Houses",
    title: "Greenfield Estate",
    description: "No 11 Pine Street, Wuse II, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 206,
    tag: "14 Houses",
    title: "Harmony Estate",
    description: "No 3 Cedar Close, Asokoro, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 207,
    tag: "5 Houses",
    title: "Serenity Estate",
    description:
      "No 5 Maple Street, Gwarinpa, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 208,
    tag: "18 Houses",
    title: "Lakeview Estate",
    description: "No 10 Water Lane, Katampe, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 209,
    tag: "9 Houses",
    title: "Crystal Estate",
    description:
      "No 6 Emerald Crescent, Jabi, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 210,
    tag: "7 Houses",
    title: "Moonlight Estate",
    description: "No 14 Galaxy Road, Wuse II, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 211,
    tag: "11 Houses",
    title: "Starfield Estate",
    description: "No 8 Comet Close, Garki, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 212,
    tag: "13 Houses",
    title: "Oakwood Estate",
    description: "No 4 Oak Lane, Maitama, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 213,
    tag: "6 Houses",
    title: "Evergreen Estate",
    description: "No 2 Lily Street, Asokoro, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 214,
    tag: "15 Houses",
    title: "Royal Estate",
    description:
      "No 9 Monarch Avenue, Gwarinpa, Federal Capital Territory, Abuja",
    image: estate,
  },
  {
    id: 215,
    tag: "19 Houses",
    title: "Golden Estate",
    description:
      "No 1 Sunflower Drive, Katampe, Federal Capital Territory, Abuja",
    image: estate,
  },
]

export const estateDetails = [
  {
    label: "NAME",
    value: "Two Bedroom Apartment",
  },
  {
    label: "STATE",
    value: "Federal Capital Territory",
  },
  {
    label: "CITY",
    value: "Abuja",
  },
  {
    label: "ADDRESS",
    value: "No 25 Kwame Nkrumah, Asokoro, Abuja.",
  },
  {
    label: "POPULAR LANDMARK",
    value: "NNPC Fueling Station",
  },
  {
    label: "ESTATE LAND (IN HECTARES)",
    value: "2 Hectares",
  },
  {
    label: "COMPLETION STATUS",
    value: "Completed",
  },
  {
    label: "VIDEO URL",
    value: "giddaa.youtube.com",
  },
  {
    label: "NUMBER OF FLOORS",
    value: "2 Floors",
  },
]

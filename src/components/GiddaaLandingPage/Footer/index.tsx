import TextInput from "@/components/SharedComponents/Input"
import React, {useState} from "react"
import axios, {AxiosError} from "axios"
import {zodResolver} from "@hookform/resolvers/zod"
import Swal from "sweetalert2"
import {z} from "zod"
import {useForm} from "react-hook-form"
import LoaderSpinner from "@/components/SharedComponents/Loader"
import {SOCIALS} from "@/components/constant"
import IconWhatspp from "@/components/IconComponents/IconWhatspp"
import IconArrowPointerVariantTwo from "@/components/IconComponents/IconArrowPointerVariantTwo"

const addInviteSchema = z.object({
  emailAddress: z.string().email({message: "Please enter valid email address"}),
})
type FormData = z.infer<typeof addInviteSchema>
const FooterSection = () => {
  const [isSubmitting, setIsubmitting] = useState(false)
  const {register, handleSubmit, reset} = useForm<FormData>({
    resolver: zodResolver(addInviteSchema),
  })
  const onSubmit = async (values: {emailAddress: string}) => {
    const baseId = "appYi5UJUgW3d1yGc"
    const tableName = "Newsletter"
    setIsubmitting(true)
    const endpoint = `https://api.airtable.com/v0/${baseId}/${tableName}`
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    }
    const serializedData = {
      Email: values.emailAddress,
    }
    try {
      const response = await axios.post(
        endpoint,
        {fields: serializedData},
        {headers}
      )

      if (response.status === 200) {
        Swal.fire(
          "Submitted Successfully!",
          "You clicked the button!",
          "success"
        )
        setIsubmitting(false)
        reset()
      }
    } catch (error) {
      const axiosError = error as AxiosError
      Swal.fire(`${axiosError.message}`, "You clicked the button!", "error")
      setIsubmitting(false)
    }
  }
  return (
    <footer className="bg-primaryGreen text-white">
      <div className="container mx-auto px-4 lg:py-[64px] py-[44px] space-y-10 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-[18px] font-[700]">Join Our Newsletter</h3>
            <p className="text-[12px] font-[400] text-gray-200">
              Stay up to date with the latest news and updates by subscribing to
              our newsletter
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full gap-4 max-w-sm md:max-w-md"
          >
            <TextInput
              type="text"
              className="font-[12px] flex-1"
              {...register("emailAddress")}
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-primaryGreen border-1 border-primaryGreen rounded-[100px] text-[12px] font-[700] hover:bg-gray-100 transition"
            >
              <div className="flex gap-2 items-center">
                Subscribe{" "}
                {isSubmitting && (
                  <LoaderSpinner size={16} color="border-[#346633]" />
                )}
              </div>
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h4 className="font-[700] mb-3 text-[13px] uppercase tracking-wide">
              About Us
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="#">Our Company</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[700] mb-3 text-[13px] uppercase tracking-wide">
              Products
            </h4>
            <ul className="space-y-2 font-[400] text-[13px] text-white">
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Short Lets </a>
              </li>
              <li>
                <a href="#">Invest</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[700] mb-3 text-[13px] uppercase tracking-wide">
              Partners
            </h4>
            <ul className="space-y-2 font-[400] text-[13px] text-white">
              <li>
                <a href="#">Join as a Property Developer</a>
              </li>
              <li>
                <a href="#">Join as a Lender</a>
              </li>
              <li>
                <a href="#">Join as an Agent</a>
              </li>
              <li>
                <a href="#">Sell Your House</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-[700] mb-3 text-[13px] uppercase tracking-wide">
              RESOURCES
            </h4>
            <ul className="space-y-2 font-[400] text-[13px] text-white">
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Watch the Demo</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-[700] mb-3 text-[13px] uppercase tracking-wide">
              CONTACT US
            </h4>
            <ul className="space-y-2 font-[400] text-[13px] text-white">
              <li>
                <a href="#">info@giddaa.com</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Book a Meeting</a>
              </li>
              <li>
                <a href="#">+234 809 762 1791</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[700] mb-3 text-[13px] uppercase tracking-wide">
              Site Navigation
            </h4>
            <ul className="space-y-2 font-[400] text-[13px] text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Sell Your House</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mx-auto flex-col items-center gap-6 justify-center">
          <div className="flex mx-auto justify-center items-center space-x-4">
            {SOCIALS?.map(value => {
              return (
                <a
                  href="#"
                  key={value.id}
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  {value.icon}
                </a>
              )
            })}
          </div>

          <button className="bg-white text-primaryGreen px-6 py-3 rounded-full flex items-center gap-2 text-[13px] font-[700] shadow-md hover:bg-gray-50 transition">
            <span className="animate-bounce">
              <IconWhatspp />
            </span>
            Join Our Community
            <span className="animate-bounce">
              <IconArrowPointerVariantTwo />
            </span>
          </button>
        </div>
        <div className="border-t-2 border-[#FFFFFF]  pt-6 flex flex-col md:flex-row items-center md:items-center justify-between space-y-6 md:space-y-0">
          <div className="text-sm">
            <p className="font-[700] text-[10px] uppercase tracking-wide">
              Property of Organac
            </p>
          </div>
          <div className="flex space-x-7 font-[400] text-[13px] cursor-pointer text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

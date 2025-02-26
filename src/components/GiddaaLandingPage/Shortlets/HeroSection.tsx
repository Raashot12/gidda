import IconButtonArrow from "@/components/IconComponents/IconButtonArrow"
import localFont from "next/font/local"
import Image from "next/image"
import "aos/dist/aos.css"
import kitchen from "../../Images/kitchen.png"
import room from "../../Images/setting-room.jpeg"
import parlour from "../../Images/parlour.jpeg"
import wavehand from "../../Images/wavehand.gif"
import AOSInit from "@/components/SharedComponents/AOSInit"

const milliRegular = localFont({
  src: "../../fonts/millik-regular/millik-Regular.otf",
  weight: "400",
  style: "normal",
})

const HeroSection = () => {
  AOSInit({
    disable: false,
  })

  return (
    <section className="container mx-auto relative">
      <section className="w-full mt-[110px] bg-white px-6 md:px-12 lg:px-20 py-12">
        {/* Top Notification Bar */}
        <div className="flex justify-center">
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 251, 0.5) 0%, rgba(246, 253, 244, 0.5) 50%, rgba(255, 237, 203, 0.5) 100%)",
            }}
            className="flex items-center gap-4 px-4 py-3 border-[#F0F0F0] border rounded-full text-sm font-medium"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <span className="text-primaryGreen font-[700] text-[10px]">
              WE SERVE NIGERIANS ACROSS THE GLOBE
            </span>
            <div className="bg-[#D9D9D9] w-[2px] h-[24px]"></div>
            <span className="text-primaryGreen font-[700] text-[10px]">
              👀 10,000 PEOPLE HAVE SEEN THIS
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mt-6">
          <h1
            className={`${milliRegular.className} text-[48px] leading-[68px]`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Find a Home to Buy In Nigeria <br />
            <span>
              On Various <span className="text-[#0A8C2A]">Purchase Plans.</span>
            </span>
          </h1>
          <p
            className="mt-4 text-lg text-[#000000] max-w-[762px] text-[16px] text-center mx-auto"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            We have taken real estate beyond{" "}
            <span className="underline">mere listings</span>. Conduct secure
            real estate transactions on our platform trusted by more than{" "}
            <span className="font-[700]">
              4,000 customers, and 30+ companies
            </span>
          </p>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#1C501E] text-white px-6 py-3 rounded-full flex items-center gap-2 text-[13px] font-[700] shadow-md hover:bg-[#174319] transition">
            Explore Our Products{" "}
            <span className="animate-bounce">
              <IconButtonArrow />
            </span>
          </button>
        </div>
        {/* Image Grid */}
        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-[37.5%_37.5%_25%] gap-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src={kitchen.src}
            alt="Kitchen"
            width={400}
            height={286}
            className="w-full h-[286px]"
            style={{
              borderRadius: "16px",
              objectFit: "cover",
              imageResolution: "from-image",
              width: "100%",
            }}
          />

          <Image
            src={parlour.src}
            alt="Living Room"
            width={400}
            height={286}
            className="w-full h-[286px]"
            style={{
              borderRadius: "16px",
              objectFit: "cover",
              imageResolution: "from-image",
              width: "100%",
            }}
          />

          <Image
            src={room.src}
            alt="Dining Area"
            width={300}
            height={286}
            style={{
              borderRadius: "16px",
              objectFit: "cover",
              imageResolution: "from-image",
              width: "100%",
            }}
            className="w-full h-[286px]"
          />
        </div>

        {/* Floating Notification */}
        <div className="absolute top-5  hidden right-0 max-w-[309px] xl:block">
          <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#335F32] via-[#335F32] to-[#EAA315]">
            <div className="relative z-10 bg-white px-4 py-3 rounded-lg">
              <div className="flex gap-3 items-start">
                <Image
                  src={wavehand?.src}
                  alt="cross design logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <div>
                  <div className="text-black">
                    <p className="font-[700]">
                      You’re Now on{" "}
                      <span className="text-[#1C501E]">Giddaa Buy</span>
                    </p>
                    <p className="text-[13px] leading-[23px] font-[400] text-[#000000]">
                      Find and buy your dream home on various purchase plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HeroSection

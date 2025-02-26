import Title from "@/components/SharedComponents/Title"
import chimalarge from "../../Images/chimalarge.jpeg"
import React from "react"
import IconPlay from "@/components/IconComponents/IconPlay"

const KnowMoreAboutUsSection = () => {
  return (
    <div className="container mx-auto py-[40px] px-6 md:py-[64px] z-100">
      <Title
        title="Know More About Us"
        subTitle="From our teams lips to your ears —  let’s tell you about Giddaa."
      />
     
        <div className="relative flex-1 rounded-[40px] p-[2px] mt-5 h-[484px] lg:h-[590px] bg-gradient-to-r from-[#EAA315] via-[#335F32] to-[#335F32]">
          <div className="relative z-10">
            <div
              className="w-full h-[480px]  flex items-center rounded-[40px] bg-cover justify-center lg:h-[585px]"
              style={{
                backgroundImage: `url(${chimalarge.src})`,
                backgroundPosition: "30% 50%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="cursor-pointer">
                <IconPlay />
              </div>
            </div>
          </div>
        </div>
       
 
    </div>
  )
}

export default KnowMoreAboutUsSection

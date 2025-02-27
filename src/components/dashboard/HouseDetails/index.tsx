import IconArrowBack from "@/components/IconComponents/IconArrowBack"
import IconDivider from "@/components/IconComponents/IconDivider"
import IconWhitePen from "@/components/IconComponents/IconWhitePen"
import Modal from "@/components/SharedComponents/Modal"
import PageTitle from "@/components/SharedComponents/PageTitle"
import React from "react"

const HouseDetails = ({
  setModalOpen,
  isModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
      headerComponent={
        <div className="h-[112px] bg-white flex items-end px-[25px] py-2 border-b border-[#F0F0F0]">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-[#FFFFFF] text-[#346633] px-4 py-2 rounded-[5px] flex items-center gap-2 text-[13px] border border-[#346633] font-[700] hover:bg-[#fcfbfb] transition"
                >
                  <div>
                    <IconArrowBack />
                  </div>
                  Back
                </button>
                <PageTitle title="The View Estate" />
              </div>
              <div className="flex space-x-3 items-center">
                <span className="text-[#000000] font-[400] text-[11px]">
                  Estates
                </span>
                <span>
                  {" "}
                  <IconDivider />
                </span>
                <span className="text-[#000000] font-[700] text-[12px]">
                  Estates
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#346633] text-white px-4 py-3 rounded-[100px] flex items-center gap-2 text-[13px] font-[700] shadow-md hover:bg-[#174319] transition">
                <span className="animate-bounce">
                  <IconWhitePen />
                </span>
                Update Estate
              </button>
            </div>
          </div>
        </div>
      }
    >
      HouseDetails
    </Modal>
  )
}

export default HouseDetails

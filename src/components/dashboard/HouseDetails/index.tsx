import IconAddHouses from "@/components/IconComponents/IconAddHouses"
import IconArrowBack from "@/components/IconComponents/IconArrowBack"
import IconDelete from "@/components/IconComponents/IconDelete"
import IconDivider from "@/components/IconComponents/IconDivider"
import IconMenuDots from "@/components/IconComponents/IconMenuDots"
import IconQRcode from "@/components/IconComponents/IconQRcode"
import IconShareMedia from "@/components/IconComponents/IconShareMedia"
import IconWhitePen from "@/components/IconComponents/IconWhitePen"
import CustomMenu from "@/components/SharedComponents/CustomMenu"
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
            <div className="flex items-center gap-4 justify-center">
              <button className="bg-[#346633] text-white px-4 py-3 rounded-[100px] flex items-center gap-2 text-[13px] font-[700] shadow-md hover:bg-[#174319] transition">
                <span className="animate-bounce">
                  <IconWhitePen />
                </span>
                Update Estate
              </button>

              <CustomMenu>
                <CustomMenu.Target>
                  <IconMenuDots />
                </CustomMenu.Target>
                <CustomMenu.Dropdown direction="auto" align="right">
                  <CustomMenu.Item
                    leftIcon={<IconAddHouses />}
                    // onClick={() => setIsViewHouse(true)}
                  >
                    <p className="font-[400] ml-2 text-[11px] text-[#4B4B4B]">
                      Add house
                    </p>
                  </CustomMenu.Item>
                  <CustomMenu.Item leftIcon={<IconShareMedia />}>
                    <p className="font-[400]  ml-2 text-[11px] text-[#4B4B4B]">
                      Share Estate
                    </p>
                  </CustomMenu.Item>
                  <CustomMenu.Item leftIcon={<IconQRcode />}>
                    <p className="font-[400]  ml-2 text-[11px] text-[#4B4B4B]">
                      QR Code
                    </p>
                  </CustomMenu.Item>

                  <CustomMenu.Item
                    leftIcon={
                      <div className="animate-swayout">
                        <IconDelete />
                      </div>
                    }
                  >
                    <p className="font-[700]  ml-2 text-[11px] text-[#E40000]">
                      Delete
                    </p>
                  </CustomMenu.Item>
                </CustomMenu.Dropdown>
              </CustomMenu>
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

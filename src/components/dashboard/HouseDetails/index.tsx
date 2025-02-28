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
import lekki from "../../Images/lekki.jpeg"
import ajah from "../../Images/ajah.jpeg"
import mushin from "../../Images/mushin.jpeg"
import React, {useCallback, useState} from "react"

const TabPanelDataList = [
  "Details",
  "Properties",
  "KYC documents",
  "Allocation",
  "Prospects",
  "Analytics",
  "Activity",
]
const documentationsComponentsList = [
  "PaymentCollectionDetails",
  "InsuranceAffiliationDetails",
  "KycDocuments",
]
export const estates = [
  {id: 1, src: lekki, alt: "Modern House"},
  {id: 2, src: ajah, alt: "Classic House"},
  {id: 3, src: mushin, alt: "Modern House"},
]
const HouseDetails = ({
  setModalOpen,
  isModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
}) => {
  const [activeComponent, setActiveComponent] = useState<number>(0)

  const handleComponentChange = useCallback((activeList: number) => {
    setActiveComponent(activeList)
  }, [])
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
      <div className="mt-6">
        <div className="flex space-x-6 border-b border-[#F0F0F0]">
          {TabPanelDataList.map((data, index) => (
            <button
              key={index}
              onClick={() => handleComponentChange(index)}
              className={`relative text-[12px] font-[600] pb-3 transition-colors duration-300 ${
                index === activeComponent
                  ? "text-[#335F32] border-b-2 border-[#335F32]"
                  : "text-[#979797] hover:text-[#335F32]"
              }`}
            >
              {data}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6 not-italic">
        <div
          className={`${
            documentationsComponentsList[activeComponent] ===
            "PaymentCollectionDetails"
              ? "block"
              : "hidden"
          }`}
        >
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {estates?.map(value => {
              return (
                <div
                  key={value.id}
                  className="w-full h-[293px] bg-cover rounded-[8px] relative"
                  style={{
                    backgroundImage: `url(${value.src?.src})`,
                    backgroundPosition: "30% 70%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex gap-2 items-start flex-col cursor-pointer absolute bottom-2 left-2">
                    <button className="bg-[#FFFFFF] text-[#335F32] px-2 py-2 rounded-[100px] flex items-center gap-2 text-[11px] font-[700]  shadow-sm transition">
                      Side View
                      <span className="animate-bounce"></span>
                    </button>
                    <button className="bg-[#1C501E] text-white px-1 py-2 border-white border rounded-[100px] flex items-center gap-2 text-[11px] font-[700] shadow-sm hover:bg-[#174319] transition">
                      Actual Image
                      <span className="animate-bounce"></span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default HouseDetails

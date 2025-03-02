/* eslint-disable @typescript-eslint/no-explicit-any */
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
import React, {useCallback, useMemo, useState} from "react"
import SpecificationAndAmenties from "../Specification"
import {
  EstateData,
  useApiGetSingleEstateDataQuery,
} from "@/redux/services/getSingleEstate"
import Skeleton from "@/components/SharedComponents/Skeleton"
import EmptyState from "@/components/SharedComponents/EmptyState"
import LoaderSpinner from "@/components/SharedComponents/Loader"

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

type Estate = {
  name: string
  city: {
    name: string
    stateId: string
    popularLandMark?: string | null
  }
  address: string
  landmark?: string | null
  landSize: number
  completionStatus: string
  videoUrl?: string | null
  floors: number
}

const formatEstateDetails = (estate: Estate) => {
  return [
    {label: "NAME", value: estate?.name || "N/A"},
    {label: "STATE", value: estate.city?.stateId || "N/A"},
    {label: "CITY", value: estate.city?.name || "N/A"},
    {label: "ADDRESS", value: estate?.address || "N/A"},
    {label: "POPULAR LANDMARK", value: estate.city?.popularLandMark || "N/A"},
    {label: "ESTATE LAND (IN HECTARES)", value: `${estate?.landSize} Hectares`},
    {label: "COMPLETION STATUS", value: estate?.completionStatus || "N/A"},
    {label: "VIDEO URL", value: estate?.videoUrl || "N/A"},
    {
      label: "NUMBER OF FLOORS",
      value: estate?.floors === 0 ? "----" : `${estate?.floors} Floors`,
    },
  ]
}
const HouseDetails = ({
  setModalOpen,
  isModalOpen,
}: {
  setModalOpen: React.Dispatch<
    React.SetStateAction<{
      booleanState: boolean
      estateId: string
    }>
  >
  isModalOpen: {
    booleanState: boolean
    estateId: string
  }
}) => {
  const [activeComponent, setActiveComponent] = useState<number>(0)

  const {data, isFetching, isError, refetch} = useApiGetSingleEstateDataQuery(
    {
      estateId: isModalOpen?.estateId,
    },
    {
      skip: isModalOpen?.estateId == "" && !isModalOpen?.booleanState,
    }
  )
  const obj = data?.value?.value ?? {}
  const handleComponentChange = useCallback((activeList: number) => {
    setActiveComponent(activeList)
  }, [])
  const transformResult = formatEstateDetails(obj as EstateData)
  const renderContent = useMemo(() => {
    if (isFetching) {
      return (
        <div className="grid grid-cols-1 mt-8 md:mt-12 gap-4">
          <div className="relative">
            <Skeleton height="200px" width="100%"></Skeleton>
            <Skeleton height="50px" className="mt-4" width="100%"></Skeleton>
            <Skeleton height="80px" width="100%" className="mt-4"></Skeleton>
            <Skeleton height="80px" width="100%" className="mt-4"></Skeleton>
          </div>
        </div>
      )
    }
    if (isError) {
      return (
        <EmptyState
          emptyStateMessage="An error occurred while fetching properties."
          buttonText="Try Again"
          resetFunct={() => refetch()}
        />
      )
    }

    return (
      <div id="properties" className="mt-8 md:mt-12">
        <div className="relative mt-6 not-italic">
          <div
            className={`${
              documentationsComponentsList[activeComponent] ===
              "PaymentCollectionDetails"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {data?.value?.value?.images?.map(value => {
                return (
                  <div
                    key={value.id}
                    className="w-full h-[293px] bg-cover rounded-[8px] relative"
                    style={{
                      backgroundImage: `url(${value?.document})`,
                      backgroundPosition: "50% 50%",
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
        <div>
          <div className="flex mt-7 items-center gap-2">
            <PageTitle title="Estate Details" />
            <div className="h-[1px] bg-[#F0F0F0] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {transformResult?.map(item => {
              return (
                <div key={item.label}>
                  <div className="font-[700] text-[10px]">{item.label}</div>
                  <div className="font-[400] text-[13px] mt-1">
                    {item.value}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-4">
            <div className="font-[700] text-[10px] leading-[26px]">
              DESCRIPTION
            </div>
            <div className="font-[400] text-[13px] mt-1  w-[100%]">
              {data?.value?.value?.description}
            </div>
          </div>
        </div>
        <SpecificationAndAmenties hideRuler={false} />
      </div>
    )
  }, [isFetching, data])
  
  return (
    <Modal
      isOpen={isModalOpen?.booleanState}
      onClose={() => {
        setModalOpen({
          estateId: "",
          booleanState: false,
        })
      }}
      footer={<></>}
      headerComponent={
        <div className="h-[112px] bg-white flex items-end px-[25px] md:px-[38px] py-2 border-b border-[#F0F0F0]">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-5">
                <button
                  onClick={() =>
                    setModalOpen({
                      estateId: "",
                      booleanState: false,
                    })
                  }
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
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                  className="text-[#000000] font-[700] text-[12px] overflow-hidden text-ellipsis break-words whitespace-normal"
                >
                  {isFetching ? (
                    <LoaderSpinner size={11} color="#346633" />
                  ) : (
                    data?.value?.value?.name
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <button className="hidden md:flex bg-[#346633] text-white px-4 py-3 rounded-[100px] items-center gap-2 text-[13px] font-[700] shadow-md hover:bg-[#174319] transition">
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
                  <CustomMenu.Item leftIcon={<IconAddHouses />}>
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
        <div className="flex space-x-6 border-b border-[#F0F0F0] overflow-x-auto md:overflow-x-scroll whitespace-nowrap">
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
      {renderContent}
    </Modal>
  )
}

export default HouseDetails

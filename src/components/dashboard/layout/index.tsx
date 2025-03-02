import {properties} from "@/components/constant"
import IconPlus from "@/components/IconComponents/IconPlus"
import CardVariantThree from "@/components/SharedComponents/CardVariantThree"
import PageTitle from "@/components/SharedComponents/PageTitle"
import React, {useEffect, useMemo, useState} from "react"
import CreateEstate from "../CreateEstate"
import HouseDetails from "../HouseDetails"
import {useApiGetAllEstateDataQuery} from "@/redux/services/getAllEstate"
import {useDebounce} from "@/components/hooks/useDebounce"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "@/redux/store"
import Skeleton from "@/components/SharedComponents/Skeleton"
import EmptyState from "@/components/SharedComponents/EmptyState"
import IconPaginateLeft from "@/components/IconComponents/IconPaginateLeft"
import IconPaginateRight from "@/components/IconComponents/IconPaginateRight"
import {setUserSearchData} from "@/redux/features/useSearchSlice"

const DashboardUI = () => {
  const [visibleProperties, setVisibleProperties] = useState<
    {
      id: string
      tag: string
      title: string
      description: string
      image: string
    }[]
  >([])
  const [currentPage, setCurrentPage] = useState(1)
  const searchState = useSelector(
    (state: RootState) => state.searchSlice.search
  )
  const [isModalOpen, setModalOpen] = useState(false)
  const debouncedSearch = useDebounce(searchState, 500)
  const [isViewHouse, setIsViewHouse] = useState({
    booleanState: false,
    estateId: "",
  })
  const pageSize = 10
  const {data, isFetching, isError, refetch} = useApiGetAllEstateDataQuery({
    search: debouncedSearch,
    pageNumber: currentPage,
    pageSize,
  })
  const dispatch = useDispatch()
  const totalPages = data?.value?.value?.totalPages || 1
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1)
  }

  useEffect(() => {
    if (!isFetching && !isError && data) {
      const properties = data?.value?.value?.data?.map(item => {
        return {
          id: item?.id,
          tag: item?.ownerType,
          title: item?.name,
          description: item?.description,
          image: item?.images?.[0]?.document,
        }
      })
      setVisibleProperties(properties?.slice(0, 10))
    } else if (!isFetching && isError) {
      setVisibleProperties([])
    }
  }, [data, isFetching, isError])

  const handleClamp = (arg: string) => {
    if (!arg) return

    const url = new URL(window.location.href)
    url.hash = arg
    window.history.replaceState(null, "", url.toString())
    setTimeout(() => {
      document
        .getElementById(arg)
        ?.scrollIntoView({behavior: "smooth", block: "start"})
    }, 100)
  }
  const allShown = visibleProperties.length === data?.value?.value?.totalRecords

  const renderContent = useMemo(() => {
    if (isFetching) {
      return (
        <div className="grid grid-cols-1 mt-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {properties.slice(0, 8).map((_, index) => (
            <div className="relative" key={index}>
              <Skeleton height="110px" width="100%"></Skeleton>
              <Skeleton height="20px" className="mt-4" width="100%"></Skeleton>
              <Skeleton height="20px" width="100%" className="mt-4"></Skeleton>
            </div>
          ))}
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
    if (visibleProperties?.length === 0 && !isFetching) {
      return (
        <EmptyState
          emptyStateMessage="No property found for your query"
          buttonText="Refresh"
          resetFunct={() => {
            if (!isFetching && !isError && data) {
              dispatch(setUserSearchData({search: ""}))
            }
          }}
        />
      )
    }

    return (
      <div id="properties" className="mt-8 md:mt-12">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleProperties?.map((card, index) => (
            <React.Fragment key={index}>
              <CardVariantThree {...card} setIsViewHouse={setIsViewHouse} />
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-col justify-center mt-[30px] sm:mt-[40px] cursor-pointer">
          <div className="flex justify-start items-center gap-2">
            <button
              onClick={() => {
                handleClamp("properties")
                handlePrevPage()
              }}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } flex items-center bg-transparent hover:bg-transparent active:bg-transparent`}
            >
              <IconPaginateLeft disable={currentPage === 1} />
            </button>

            <button
              onClick={() => {
                handleClamp("properties")
                handleNextPage()
              }}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } flex items-center bg-transparent hover:bg-transparent active:bg-transparent`}
            >
              <IconPaginateRight />
            </button>
          </div>
          {!allShown && Number(data?.value?.value?.data?.length) > 4 && (
            <p className="font-normal text-[11px] text-[#335F32]">
              View&nbsp;
              {Math.max(
                0,
                Number(data?.value?.value?.totalRecords) -
                  currentPage * pageSize
              )}
              &nbsp; More
            </p>
          )}
        </div>
      </div>
    )
  }, [isFetching, visibleProperties])

  return (
    <div className="mt-[140px] mb-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Estates-5" />
        <div className="flex justify-center">
          <button
            onClick={() => {
              setCurrentPage(1)
              setModalOpen(true)
            }}
            className="bg-[#346633] text-white px-3 py-3 rounded-full flex items-center gap-2 text-[13px] font-[700] hover:bg-[#174319] transition"
          >
            <span>
              <IconPlus />
            </span>
            Create Estate
          </button>
        </div>
      </div>
      <>{renderContent}</>

      <CreateEstate isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      {isViewHouse?.booleanState && (
        <HouseDetails setModalOpen={setIsViewHouse} isModalOpen={isViewHouse} />
      )}
    </div>
  )
}

export default DashboardUI

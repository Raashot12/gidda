import {properties} from "@/components/constant"
import IconPlus from "@/components/IconComponents/IconPlus"
import Swal from "sweetalert2"
import CardVariantThree from "@/components/SharedComponents/CardVariantThree"
import PageTitle from "@/components/SharedComponents/PageTitle"
import Pagination from "@/components/SharedComponents/Pagination/Pagination"
import {usePagination} from "@/components/SharedComponents/Pagination/usePagination"
import React, {useState} from "react"
import CreateEstate from "../CreateEstate"
import HouseDetails from "../HouseDetails"

type ImagePreview = {
  fileName: string
  imageUrl: string
}

const DashboardUI = () => {
  const [visibleProperties, setVisibleProperties] = useState(
    properties.slice(0, 4)
  )
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([])
 
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [isViewHouse, setIsViewHouse] = useState(false)
  const batchCount = 4
  const {pagination, prevPage, nextPage, changePage} = usePagination({
    itemsPerPage: 4,
    data: visibleProperties,
    startFrom: 1,
  })
  const handleShowMore = () => {
    const currentLength = visibleProperties.length
    const remaining = properties.length - currentLength
    const nextBatchCount = remaining < batchCount ? remaining : batchCount
    setVisibleProperties(properties.slice(0, currentLength + nextBatchCount))
  }


  
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"]
    const files = e.target.files

    if (!files || files.length === 0) {
      Swal.fire(
        "File error, kindly check file.",
        "You clicked the button!",
        "warning"
      )
      return
    }

    const validPreviews: ImagePreview[] = []
    const validFiles: File[] = []

    for (const file of files) {
      if (file.size > maxSize) {
        Swal.fire(
          "Sorry! File is larger than 5MB",
          "You clicked the button!",
          "warning"
        )
        continue
      }

      if (!allowedTypes.includes(file.type)) {
        Swal.fire(
          "File error, kindly check file type.",
          "You clicked the button!",
          "warning"
        )
        continue
      }

      const imageUrl = URL.createObjectURL(file)
      validPreviews.push({fileName: file.name, imageUrl})
      validFiles.push(file)
    }

    // Append valid items to the state arrays
    setImagePreviews(prev => [...prev, ...validPreviews])
    setImageFiles(prev => [...prev, ...validFiles])
  }
  const handleDelete = (id: number) => {
    const remainingImage = imagePreviews?.filter((_, index) => id !== index)
    const remainingImageFile = imageFiles?.filter((_, index) => id !== index)
    setImagePreviews(remainingImage)
    setImageFiles(remainingImageFile)
  }
  const handleShowLess = () => {
    setVisibleProperties(properties.slice(0, 4))
    window.scrollTo({top: 112, left: 0, behavior: "smooth"})
  }

  const allShown = visibleProperties.length === properties.length

  return (
    <div className="mt-[140px] mb-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Estates-5" />
        <div className="flex justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#346633] text-white px-3 py-3 rounded-full flex items-center gap-2 text-[13px] font-[700] hover:bg-[#174319] transition"
          >
            <span>
              <IconPlus />
            </span>
            Create Estate
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleProperties.map((card, index) => (
          <CardVariantThree
            key={index}
            index={index}
            {...card}
            setIsViewHouse={setIsViewHouse}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 flex-col justify-center mt-[30px] sm:mt-[40px] cursor-pointer">
        <Pagination
          idToClampTo="blogs"
          pagination={pagination}
          prevPage={prevPage}
          nextPage={nextPage}
          changePage={changePage}
        />
        {!allShown && properties.length > 4 && (
          <p
            onClick={handleShowMore}
            className="font-normal text-[11px] text-[#335F32]"
          >
            View {properties.length - visibleProperties.length} More
          </p>
        )}
        {allShown && (
          <button
            onClick={handleShowLess}
            className="font-normal text-[11px] text-[#335F32]"
          >
            Reduce to 4
          </button>
        )}
      </div>
      <CreateEstate
        handleImageUpload={handleImageUpload}
        handleDelete={handleDelete}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        imagePreviews={imagePreviews}
      />
      <HouseDetails setModalOpen={setIsViewHouse} isModalOpen={isViewHouse} />
    </div>
  )
}

export default DashboardUI

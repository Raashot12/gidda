import {properties} from "@/components/constant"
import IconArrowBack from "@/components/IconComponents/IconArrowBack"
import IconDivider from "@/components/IconComponents/IconDivider"
import IconPlus from "@/components/IconComponents/IconPlus"
import Image from "next/image"
import Swal from "sweetalert2"
import IconUpload from "@/components/IconComponents/IconUpload"
import CardVariantThree from "@/components/SharedComponents/CardVariantThree"
import Modal from "@/components/SharedComponents/Modal"
import PageTitle from "@/components/SharedComponents/PageTitle"
import Pagination from "@/components/SharedComponents/Pagination/Pagination"
import {usePagination} from "@/components/SharedComponents/Pagination/usePagination"
import React, {useState} from "react"
import IconEdit from "@/components/IconComponents/IconEdit"
import IconBin from "@/components/IconComponents/IconBin"
import FormElement from "@/components/Form"
import {OptionType} from "@/types"
import TextInput from "@/components/SharedComponents/Input"
import TextArea from "@/components/SharedComponents/TextArea"
import SpecificationAndAmenties from "../Specification"

type ImagePreview = {
  fileName: string
  imageUrl: string
}

const DashboardUI = () => {
  const [visibleProperties, setVisibleProperties] = useState(
    properties.slice(0, 4)
  )
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([])
  const [selectedValue, setSelectedValue] = useState("")
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [isModalOpen, setModalOpen] = useState(false)
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
  const options: OptionType[] = [
    {value: "apple", label: "Apple"},
    {value: "orange", label: "Orange"},
    {value: "banana", label: "Banana"},
    {value: "mango", label: "Mango"},
    {value: "pineapple", label: "Pineapple"},
  ]

  const handleSelectChange = (value: string) => {
    setSelectedValue(value)
    console.log("Selected value:", value)
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
          <CardVariantThree key={index} index={index} {...card} />
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
      {/* Reusable Modal rendered without overlay */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        headerComponent={
          <div className="h-[112px] flex items-end px-[25px] py-2 border-b border-[#F0F0F0]">
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
                <PageTitle title="Creating Estate" />
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
          </div>
        }
      >
        <div>
          <div className="w-full h-40 md:h-48 mt-[30px] flex items-center justify-center bg-[#FAFFFA] border border-[#D9D9D9] rounded-[8px] p-4">
            <div className="flex flex-col gap-1 items-center cursor-pointer">
              <div>
                <div className="relative flex flex-col items-center gap-3">
                  <IconUpload />
                  <p className="text-[#335F32] text-[10px] font-[700] tracking-wide">
                    ADD ESTATE IMAGES
                  </p>
                  <input
                    style={{
                      height: 80,
                      width: 80,
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      opacity: 0,
                    }}
                    type="file"
                    accept=".jpeg,.jpg,.png"
                    multiple={true}
                    name="file"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Image previews */}
          <div className="mt-6">
            <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
              {imagePreviews?.map((preview, index) => {
                return (
                  <div key={index}>
                    <div className="relative w-24 h-24">
                      <Image
                        src={preview?.imageUrl as string}
                        alt="Parlour"
                        fill
                        className="object-cover rounded-[5px]"
                      />
                      <div className="flex gap-2 items-center cursor-pointer absolute bottom-2 right-2">
                        <span>
                          {" "}
                          <IconEdit />
                        </span>
                        <span onClick={() => handleDelete(index)}>
                          <IconBin />
                        </span>
                      </div>
                    </div>
                    <p className="w-[96px] uppercase whitespace-nowrap overflow-hidden text-ellipsis mt-2 text-sm font-medium">
                      {preview.fileName}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div>
              <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                Name <span className="text-red-500">*</span>
              </h1>
              <TextInput placeholder="Enter name" withoutIcon={true} />
            </div>
            <FormElement
              options={options}
              placeholder="Select state"
              searchable={true}
              handleSelectChange={handleSelectChange}
              label="State"
            />
            <FormElement
              options={options}
              placeholder="Select city"
              searchable={true}
              handleSelectChange={handleSelectChange}
              label="City"
            />
            <div>
              <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                Address <span className="text-red-500">*</span>
              </h1>
              <TextInput placeholder="Enter address" withoutIcon={true} />
            </div>
            <div>
              <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                Popular Landmark
              </h1>
              <TextInput
                placeholder="What’s the asking price of this property?"
                withoutIcon={true}
              />
            </div>
            <div>
              <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                Estate Land (In Hectares){" "}
              </h1>
              <TextInput placeholder="Enter value" withoutIcon={true} />
            </div>
            <FormElement
              options={options}
              placeholder="Select status"
              searchable={true}
              handleSelectChange={handleSelectChange}
              label="Completion Status*"
            />
            <div>
              <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                Video URL
              </h1>
              <TextInput
                placeholder="Add a Youtube Video Link"
                withoutIcon={true}
              />
            </div>
            <div>
              <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                Number of Floors
              </h1>
              <TextInput placeholder="Enter number" withoutIcon={true} />
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
              Description<span className="text-red-500">*</span>
            </h1>
            <TextArea withoutIcon />
          </div>
          <SpecificationAndAmenties />
        </div>
      </Modal>
    </div>
  )
}

export default DashboardUI

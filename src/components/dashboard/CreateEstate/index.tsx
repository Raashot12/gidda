/* eslint-disable @typescript-eslint/no-explicit-any */
import IconBin from "@/components/IconComponents/IconBin"
import IconDivider from "@/components/IconComponents/IconDivider"
import IconEdit from "@/components/IconComponents/IconEdit"
import IconUpload from "@/components/IconComponents/IconUpload"
import TextInput from "@/components/SharedComponents/Input"
import Modal from "@/components/SharedComponents/Modal"
import PageTitle from "@/components/SharedComponents/PageTitle"
import TextArea from "@/components/SharedComponents/TextArea"
import IconArrowBack from "@/components/IconComponents/IconArrowBack"
import {ErrorResponse, OptionType} from "@/types"
import Image from "next/image"
import Swal from "sweetalert2"
import React, {useState} from "react"
import SpecificationAndAmenties from "../Specification"
import {useApiGetCountriesDataQuery} from "@/redux/services/countryApi"
import AutoComplete from "@/components/SharedComponents/AutoComplete"
import {useApiGetStatesDataQuery} from "@/redux/services/stateApi"
import CustomSelect from "@/components/SharedComponents/CustomSelect"
import {useForm, Controller} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {useApiGetCitiesDataQuery} from "@/redux/services/cityApi"
import {useApiPostEstateDataMutation} from "@/redux/services/createEstate"
import {momentBrowserTimezone} from "@/components/util"
import LoaderSpinner from "@/components/SharedComponents/Loader"
import {useUploadEstateImageMutation} from "@/redux/services/uploadImage"

type ImagePreview = {
  fileName: string
  imageUrl: string
}

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  landmark: z.string().optional(),
  estateLand: z.string().optional(),
  status: z.string().min(1, "Completion status is required"),
  videoUrl: z.string().optional(),
  floors: z.string().optional(),
  description: z.string().min(1, "Description is required"),
})
type EstateFormData = z.infer<typeof schema>
const statusOptions: OptionType[] = [
  {value: "COMPLETED", label: "Completed"},
  {value: "UNDER_CONSTRUCTION", label: "Under Construction"},
]
const CreateEstate = ({
  isModalOpen,
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
}) => {
  const [searchCountryValue, setSearchCountryValue] = useState("")
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([])
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })
  const completionDate = new Date()
  const currentCompletionDate =
    momentBrowserTimezone(completionDate).format("DD MMM, YYYY")
  const [registerEstateCreation, {isLoading}] = useApiPostEstateDataMutation()
  const [uploadEstateImage, {isLoading: isLoadingUpload}] = useUploadEstateImageMutation()
  const {currentData: countryData, isFetching: isFetchingCountryData} =
    useApiGetCountriesDataQuery(
      {search: searchCountryValue},
      {
        selectFromResult: result => ({
          ...result,
          currentData:
            result.currentData?.value?.value?.data?.map(value => {
              return {
                id: value?.name,
                value: value?.id,
              }
            }) ?? [],
        }),
        skip: searchCountryValue.length < 2,
      }
    )
  const countryId = getValues("country")
  const stateId = getValues("state")
  const {
    currentData: stateData,
    refetch,
    isFetching: isFetchingState,
  } = useApiGetStatesDataQuery(
    {countryId: countryId},
    {
      selectFromResult: result => ({
        ...result,
        currentData:
          result.currentData?.value?.value?.data?.map(value => {
            return {
              label: value?.name,
              value: value?.id,
            }
          }) ?? [],
      }),
      skip: countryId?.length === 0,
    }
  )
  const {
    currentData: cityData,
    refetch: refetchCities,
    isFetching: isFetchingCities,
  } = useApiGetCitiesDataQuery(
    {stateId: stateId},
    {
      selectFromResult: result => ({
        ...result,
        currentData:
          result.currentData?.value?.value?.data?.map(value => {
            return {
              label: value?.name,
              value: value?.id,
            }
          }) ?? [],
      }),
      skip: stateId?.length === 0,
    }
  )

  const handleSelectChange = (value: string) => {
    setSearchCountryValue(value)
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
    setImagePreviews(prev => [...prev, ...validPreviews])
    setImageFiles(prev => [...prev, ...validFiles])
  }

  const handleUpload = async (arg: string) => {
    const uploadPromises = imageFiles?.map(file => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = async () => {
          const base64String = (reader.result as string).split(",")[1]

          try {
            await uploadEstateImage({
              ownerId: arg,
              base64: base64String,
              name: file.name,
              extension: file.name.split(".").pop() || "",
            }).unwrap()
            resolve(`Uploaded: ${file.name}`)
          } catch (error) {
            console.log(error)
            reject(`Failed: ${file.name}`)
          }
        }

        reader.onerror = () => reject(`Error reading file: ${file.name}`)
        reader.readAsDataURL(file)
      })
    })

    try {
      const results = await Promise.allSettled(uploadPromises)
      const success = results
        .filter(res => res.status === "fulfilled")
        .map(res => (res as PromiseFulfilledResult<string>).value)
      const failed = results
        .filter(res => res.status === "rejected")
        .map(res => (res as PromiseRejectedResult).reason)
      Swal.fire(
        `Success: ${success.length}, Failed: ${failed.length}`,
        "success"
      )
    } catch (error) {
      const errCast = error as ErrorResponse
      const errMsg =
        errCast?.data?.value?.message || "An unexpected error occurred."
      Swal.fire(errMsg, "Please try again!", "error")
    }
  }

  const handleDelete = (id: number) => {
    const remainingImage = imagePreviews?.filter((_, index) => id !== index)
    const remainingImageFile = imageFiles?.filter((_, index) => id !== index)
    setImagePreviews(remainingImage)
    setImageFiles(remainingImageFile)
  }

  const onSubmit = async (propertyInfo: EstateFormData) => {
    if (imageFiles.length === 0) {
      Swal.fire("Please select at least one file to upload")
      return
    }
    try {
      const reconstructedSelectedAmenities: Record<string, boolean> =
        selectedAmenities?.reduce(
          (acc: Record<string, boolean>, value: string) => {
            acc[value] = true
            return acc
          },
          {}
        ) ?? {}

      const response = await registerEstateCreation({
        creatEstateObject: {
          name: propertyInfo?.name,
          cityId: propertyInfo?.city,
          address: propertyInfo?.address,
          videoUrl: propertyInfo?.videoUrl,
          ownerType: "DEVELOPER",
          landmark: propertyInfo?.landmark,
          description: propertyInfo?.description,
          completionStatus: propertyInfo?.status,
          completionDate: currentCompletionDate,
          completionLevel: 100,
          longitude: -118.400356,
          latitude: 34.07362,
          features: [
            {
              id: "1",
              name: "Swimming Pool",
              icon: "🏊",
              ...reconstructedSelectedAmenities,
            },
          ],
          landSize: 5000,
          organizationId: "67890",
          floors: 0,
        },
      }).unwrap()

      console.log(response)

      const estateId = response?.value?.value?.id

      if (estateId) {
        await handleUpload(estateId)
      }

      setModalOpen(false)
      setSearchCountryValue("")
      setSelectedAmenities([])
      setImagePreviews([])
      setImageFiles([])
      reset()
      Swal.fire(
        "Created Successfully!",
        "Estate has been registered.",
        "success"
      )
    } catch (error) {
      const errCast = error as ErrorResponse
      const errMsg =
        errCast?.data?.value?.message || "An unexpected error occurred."
      Swal.fire(errMsg, "Please try again!", "error")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false)
        }}
        footer={
          <footer className="bg-[#F0F0F0] py-4 flex items-center justify-center">
            <div className="flex items-center gap-5">
              <button
                disabled={isLoadingUpload || isLoading}
                onClick={() => {
                  setModalOpen(false)
                  setSearchCountryValue("")
                  setSelectedAmenities([])
                  setImagePreviews([])
                  setImageFiles([])
                  reset()
                }}
                className="bg-[#F0F0F0] text-[#346633] px-4 py-3 rounded-[100px] flex items-center gap-2 text-[13px] border border-[#346633] font-[700] hover:bg-[#d4d4d4] transition"
              >
                Cancel
              </button>

              <button
                disabled={isLoadingUpload || isLoading}
                className="bg-[#346633] text-white px-4 py-3 rounded-[100px] flex items-center gap-2 text-[13px] font-[700] hover:bg-[#174319] transition"
              >
                Create Estate{" "}
                {isLoading && (
                  <LoaderSpinner size={16} className="ml-1" color="#fffff" />
                )}
              </button>
            </div>
          </footer>
        }
        headerComponent={
          <div className="h-[112px] flex items-end px-[25px] md:px-[38px] py-2 border-b border-[#F0F0F0]">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-5">
                <button
                  onClick={() => {
                    setModalOpen(false)
                    setSearchCountryValue("")
                    setSelectedAmenities([])
                    setImagePreviews([])
                    setImageFiles([])
                    reset()
                  }}
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
            <Controller
              name="name"
              control={control}
              render={({field}) => (
                <div>
                  <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                    Name <span className="text-red-500">*</span>
                  </h1>
                  <TextInput
                    {...field}
                    placeholder="Enter name"
                    withoutIcon={true}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[10px]">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({field}) => (
                <div>
                  {" "}
                  <AutoComplete
                    data={countryData || []}
                    placeholder="Select country"
                    searchable={true}
                    handleSelectChange={value => {
                      handleSelectChange(value)
                    }}
                    onItemSubmit={item => {
                      field.onChange(item.value)
                      refetch()
                    }}
                    label="Country"
                    loadingState={isFetchingCountryData}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-[10px]">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({field}) => (
                <div>
                  {" "}
                  <CustomSelect
                    data={stateData || []}
                    placeholder="Select state"
                    searchable={true}
                    onChange={value => {
                      field.onChange(value)
                      refetchCities()
                    }}
                    label="State"
                    loadingState={isFetchingState}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-[10px]">
                      {errors?.state?.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({field}) => (
                <div>
                  <CustomSelect
                    data={cityData || []}
                    placeholder="Select city"
                    searchable={true}
                    onChange={value => {
                      console.log(value)
                      field.onChange(value)
                    }}
                    label="City"
                    loadingState={isFetchingCities}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-[10px]">
                      {errors?.city?.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              name="address"
              control={control}
              render={({field}) => (
                <div>
                  <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                    Address <span className="text-red-500">*</span>
                  </h1>
                  <TextInput
                    {...field}
                    placeholder="Enter address"
                    withoutIcon={true}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-[10px]">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="landmark"
              control={control}
              render={({field}) => (
                <div>
                  <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                    Popular Landmark
                  </h1>
                  <TextInput
                    {...field}
                    placeholder="What’s the asking price of this property?"
                    withoutIcon={true}
                  />
                </div>
              )}
            />
            <Controller
              name="estateLand"
              control={control}
              render={({field}) => (
                <div>
                  <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                    Estate Land (In Hectares){" "}
                  </h1>
                  <TextInput
                    {...field}
                    placeholder="Enter value"
                    withoutIcon={true}
                  />
                </div>
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({field}) => (
                <div>
                  <CustomSelect
                    data={statusOptions}
                    placeholder="Select status"
                    searchable={true}
                    onItemSubmit={option => {
                      field.onChange(option?.value)
                    }}
                    label="Completion Status"
                  />
                  {errors.status && (
                    <p className="text-red-500 text-[10px]">
                      {errors.status.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="videoUrl"
              control={control}
              render={({field}) => (
                <div>
                  <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                    Video URL
                  </h1>
                  <TextInput
                    {...field}
                    placeholder="Add a Youtube Video Link"
                    withoutIcon={true}
                  />
                </div>
              )}
            />
            <Controller
              name="floors"
              control={control}
              render={({field}) => (
                <div>
                  <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                    Number of Floors
                  </h1>
                  <TextInput
                    {...field}
                    placeholder="Enter number"
                    withoutIcon={true}
                  />
                </div>
              )}
            />
          </div>
          <Controller
            name="description"
            control={control}
            render={({field}) => (
              <div className="my-5">
                <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
                  Description<span className="text-red-500">*</span>
                </h1>
                <TextArea {...field} withoutIcon />
                {errors.description && (
                  <p className="text-red-500 text-[10px]">
                    {errors.description.message}
                  </p>
                )}
              </div>
            )}
          />

          <SpecificationAndAmenties
            setSelectedAmenities={setSelectedAmenities}
          />
        </div>
      </Modal>
    </form>
  )
}

export default CreateEstate

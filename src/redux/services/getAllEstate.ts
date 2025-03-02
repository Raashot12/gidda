/* eslint-disable @typescript-eslint/no-explicit-any */
import {baseApi as api} from "./baseApi"

type GetStateParams = {
  pageSize?: number
  search?: string
  pageNumber?: number
}

type City = {
  id: string
  name: string
  stateId: string
  dateCreated: string
  state: string | null
  popularLandMark: string | null
  popularLandMarkLongitude: number
  popularLandMarkLatitude: number
  extraProperty: any
}

type HouseStats = {
  totalHouses: number
  totalUnits: number
}

type Organization = {
  id: string
  name: string
  address: string
  coverImage: string
  logo: string
  houseCount: number
  estateCount: number
  yearsInOperation: number
  documentCount: number
  partnerCount: number
}

type CreatedBy = {
  Id: string
  Name: string
  RegistrationType: string
  Action: string
}
type EstateImage = {
  id: string
  name: string
  description: string
  extension: string
  document: string
  type: "ACTUAL_IMAGE"
  extraProperties: any | null
  optionId: "ESTATE_IMAGE"
  option: any | null
}

export type Estate = {
  id: string
  name: string
  city: City
  address: string
  landmark: string
  longitude: number
  latitude: number
  videoUrl: string
  landSize: number
  ownerType: string
  description: string
  completionStatus: string
  completionDate: string
  completionLevel: number
  features: any[]
  feature: any | null
  images: EstateImage[]
  houses: any[]
  houseStats: HouseStats
  organizationId: string
  floors: number
  organization: Organization
  createdBy: CreatedBy
  dateCreated: string
  dateLastModified: string | null
  lastModifiedBy: string | null
}
type Pagination = {
  pageNumber: number
  pageSize: number
  totalPages: number
  totalRecords: number
  data: Estate[]
}

type ApiResponse = {
  value: {
    statusCode: number
    message: string
    value: Pagination
  }
  formatters: any[]
  contentTypes: any[]
  declaredType: any | null
  statusCode: number
}
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiGetAllEstateData: build.query<ApiResponse, GetStateParams>({
      query: ({search, pageSize = 2, pageNumber}) => ({
        url: `/developer/estate/get-all`,
        params: {
          search: search,
          pageSize: pageSize,
          pageNumber: pageNumber,
        },
      }),
      providesTags: [{type: "Estate", id: "LIST"}],
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as getAllEstateApi}
export const {useApiGetAllEstateDataQuery} = injectedRtkApi

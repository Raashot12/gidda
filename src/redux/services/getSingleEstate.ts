/* eslint-disable @typescript-eslint/no-explicit-any */
import {baseApi as api} from "./baseApi"

type GetStateParams = {
  estateId: string
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

type ImageOption = {
  id: string
  name: string
  isRequired: boolean
  description: string
  extraProperties: any
}

type Image = {
  id: string
  name: string
  description: string
  extension: string
  document: string
  type: string
  extraProperties: any
  optionId: string
  option: ImageOption
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

export type EstateData = {
  name: string
  city: City
  address: string
  landmark: string
  longitude: number
  videoUrl: string | null
  landSize: number
  ownerType: string
  latitude: number
  description: string
  completionStatus: string
  completionDate: string
  completionLevel: number
  features: any[]
  feature: any
  images: Image[]
  houses: any[]
  houseStats: any
  organizationId: string
  floors: number
  organization: Organization
  id: string
  createdBy: CreatedBy
  dateCreated: string
  dateLastModified: string | null
  lastModifiedBy: string | null
}

type ApiResponse = {
  value: {
    statusCode: number
    message: string
    value: EstateData
  }
  formatters: any[]
  contentTypes: any[]
  declaredType: any
  statusCode: number
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiGetSingleEstateData: build.query<ApiResponse, GetStateParams>({
      query: ({estateId}) => ({
        url: `/developer/estate/${estateId}`,
      }),
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as getSingleEstateApi}
export const {useApiGetSingleEstateDataQuery} = injectedRtkApi

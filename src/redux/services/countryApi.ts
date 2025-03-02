/* eslint-disable @typescript-eslint/no-explicit-any */
import {baseApi as api} from "./baseApi"

type Country = {
  id: string
  name: string
  stateCount: number
  code: string
  region: string
}

type Pagination = {
  pageNumber: number
  pageSize: number
  totalPages: number
  totalRecords: number
  data: Country[]
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

type GetCountriesParams = {
  search?: string
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiGetCountriesData: build.query<ApiResponse, GetCountriesParams>({
      query: ({search}) => ({
        url: `/public/country/get-all`,
        params: search ? {search} : {},
      }),
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as countryApi}
export const {useApiGetCountriesDataQuery} = injectedRtkApi

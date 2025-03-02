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

type GetCityParams = {
  stateId?: string
  search?: string
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiGetCitiesData: build.query<ApiResponse, GetCityParams>({
      query: ({stateId, search}) => ({
        url: `/public/city/${stateId}/get-all`,
        params: {
          search: search,
          pageSize: 1000,
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as citiesApi}
export const {useApiGetCitiesDataQuery} = injectedRtkApi

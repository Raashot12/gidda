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

type GetStateParams = {
  countryId?: string
  search?: string
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiGetStatesData: build.query<ApiResponse, GetStateParams>({
      query: ({countryId, search}) => ({
        url: `/public/state/${countryId}/get-all`,
        params: {
          search:search,
          pageSize:1000,
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as stateApi}
export const {useApiGetStatesDataQuery} = injectedRtkApi
